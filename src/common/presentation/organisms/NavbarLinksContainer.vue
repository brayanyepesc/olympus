<script setup lang="ts">
import { navigationLinks } from '../../utils/navigationLinks';
</script>

<template>
    <ul class="flex space-x-2">
        <a :href="path" v-for="{ id, name, path } in navigationLinks" :key="id" class="text-indigo-500 hover:text-pink-500 cursor-pointer">{{ name }}</a>
    </ul>
</template>