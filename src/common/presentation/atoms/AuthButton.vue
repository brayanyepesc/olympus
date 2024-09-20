<script lang="ts" setup>
    const { btnText, action } = defineProps<{ btnText: string, action: () => void }>()
</script>

<template>
    <button @click="action" class="px-8 py-2 border border-gray-200 rounded-lg text-indigo-500 shadow-md hover:border-pink-500 transition-all hover:shadow-pink-500">{{ btnText }}</button>
</template>