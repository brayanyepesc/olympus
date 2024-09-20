<script lang="ts" setup>
    const { btnText, action } = defineProps<{ btnText: string, action: () => void }>()
</script>

<template>
    <button @click="action" class="py-1 px-4 rounded-lg text-indigo-500 hover:text-white border border-indigo-500 shadow-md hover:bg-indigo-500 transition-all">{{ btnText }}</button>
</template>