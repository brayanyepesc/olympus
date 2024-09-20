<script lang="ts" setup>
    const { btnText, action } = defineProps<{ btnText: string, action: () => void }>()
</script>

<template>
    <button @click="action" class="px-8 py-2 rounded-lg text-white bg-indigo-500 hover:bg-indigo-800 transition-all">{{ btnText }}</button>
</template>