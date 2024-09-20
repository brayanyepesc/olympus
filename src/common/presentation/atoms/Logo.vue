<script lang="ts" setup>
    type SizeProps = 'sm' | 'md' | 'xl' | '3xl' | '5xl'
    const props = defineProps<{ size: SizeProps }>()
</script>

<template>
    <div>
        <span :class="`text-${props.size} font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500`">Olympus</span>
    </div>
</template>