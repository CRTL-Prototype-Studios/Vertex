// server/api/auth/[...].ts

import { PrismaClient } from '@prisma/client'
import { H3Event } from 'h3'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export default defineEventHandler(async (event) => {
    const path = event.path.split('/')[0]
    console.log(path)

    if (path === 'login') {
        const { email, password } = await readBody(event)
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user || !await bcrypt.compare(password, user.password)) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Invalid credentials',
            })
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '30m' })

        // Create a new session
        const {error} = await prisma.session.create({
            data: {
                userId: user.id,
                expires: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes
                sessionToken: token,
                accessToken: token,
            },
        })

        if(error){
            throw createError({
                statusCode: 500,
                statusMessage: 'Unable to create login session. Something is wrong.',
            })
        }

        return { token, user: { id: user.id, email: user.email, name: user.name } }
    } else if (path === 'register') {
        const { email, password, name } = await readBody(event)
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (existingUser) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Email already in use',
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name
            },
        })

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '30m' })

        // Create a new session
        await prisma.session.create({
            data: {
                userId: user.id,
                expires: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes
                sessionToken: token,
                accessToken: token,
            },
        })

        return { token, user: { id: user.id, email: user.email, name: user.name } }
    } else if (path === 'logout') {
        // In a stateless JWT setup, you typically don't need server-side logout
        // The client should remove the token
        return { success: true }
    } else if (path === 'session') {
        const token = getRequestHeader(event, 'Authorization')?.split(' ')[1]
        if (!token) {
            throw createError({
                statusCode: 401,
                statusMessage: 'No token provided',
            })
        }

        try {
            const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }
            const user = await prisma.user.findUnique({ where: { id: decoded.userId } })

            if (!user) {
                throw createError({
                    statusCode: 401,
                    statusMessage: 'Invalid token',
                })
            }

            return { user: { id: user.id, email: user.email, name: user.name } }
        } catch (error) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Invalid token',
            })
        }
    } else {
        throw createError({
            statusCode: 404,
            statusMessage: 'Not Found',
        })
    }
})