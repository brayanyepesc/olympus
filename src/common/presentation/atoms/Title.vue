<script lang="ts" setup>
type SizeProps = 'sm' | 'md' | 'xl' | '3xl' | '5xl'
const props = defineProps<{ size: SizeProps, title: string }>()
const sizeClasses = {
    sm: 'text-sm',
    md: 'text-md',
    xl: 'text-xl',
    '3xl': 'text-3xl',
    '5xl': 'text-5xl',
}
</script>

<template>
    <div>
        <h2
            :class="[sizeClasses[props.size], 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500']">
            {{ props.title }}</h2>
    </div>
</template>