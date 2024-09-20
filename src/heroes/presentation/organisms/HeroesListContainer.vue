<script lang="ts" setup>
import { Hero } from '../../domain/Heroes.entity';
import HeroListItem from '../atoms/HeroListItem.vue';

const { heroes } = defineProps<{ heroes: Hero[] }>();
</script>

<template>
    <ul class="p-4 mt-5 rounded-lg space-y-4">
        <li v-for="hero in heroes" :key="hero.id">
            <HeroListItem :hero="hero" />
        </li>
    </ul>
</template>