<script lang="ts" setup>
import { Hero } from '../../domain/Heroes.entity';

const { hero } = defineProps<{ hero: Hero }>();
</script>

<template>
    <div class="flex justify-between bg-gray-100 rounded-lg p-2">
        <div class="flex items-center gap-2">
            <img v-if="hero.picture" :src="hero.picture" alt="Heroe image" class="w-10 h-10 rounded-full">
            <span v-if="hero.name">{{ hero.name }}</span>
        </div>
        <a :href="`/heroes/details/${hero.id}`"
            class="p-2 text-white bg-indigo-500 hover:bg-indigo-800 rounded-lg">Details</a>
    </div>
</template>