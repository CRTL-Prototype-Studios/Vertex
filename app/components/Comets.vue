<template>
    <canvas ref="canvasRef" class="absolute inset-0" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)

const props = defineProps({
    cometCount: {
        type: Number,
        default: 20
    },
    cometSpeed: {
        type: Number,
        default: 1
    }
})

onMounted(() => {
    const canvas = canvasRef.value
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Comet {
        constructor() {
            this.reset()
        }

        reset() {
            this.length = Math.random() * 80 + 10
            this.x = -this.length
            this.y = Math.random() * canvas.height
            this.speed = (Math.random() * 1 + 0.5) * props.cometSpeed
            this.radius = Math.random() * 1 + 0.1
        }

        draw() {
            if (!isFinite(this.x) || !isFinite(this.y) || !isFinite(this.length)) {
                this.reset()
                return
            }

            ctx.beginPath()
            const gradient = ctx.createLinearGradient(
                this.x, this.y,
                this.x + this.length, this.y
            )
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0.8)')
            ctx.strokeStyle = gradient
            ctx.lineWidth = this.radius
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(this.x + this.length, this.y)
            ctx.stroke()
            ctx.closePath()
        }

        update() {
            this.x += this.speed
            if (this.x > canvas.width + this.length || !isFinite(this.x)) {
                this.reset()
            }
        }
    }

    const comets = Array(props.cometCount).fill().map(() => new Comet())

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        comets.forEach(comet => {
            comet.draw()
            comet.update()
        })
        animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    onUnmounted(() => {
        cancelAnimationFrame(animationFrameId)
        window.removeEventListener('resize', resizeCanvas)
    })
})
</script>