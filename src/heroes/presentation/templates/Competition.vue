<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useGetHeroes } from '../hooks/useGetHeroes.hook';
import { Hero } from '../../domain/Heroes.entity';
const heroes = ref<Hero[]>([]);

const { getHeroes, isLoading } = useGetHeroes();
onMounted(async () => {
    const fetchedHeroes = await getHeroes();
    heroes.value = fetchedHeroes || [];
});
</script>

<template>
    select only one three of the following heroes
    <div class="grid grid-cols-3 gap-4">
        <div v-for="hero in heroes" :key="hero.id" class="flex flex-col items-center">
            <span class="text-gray-500">{{ hero.name }}</span>
            <button class="bg-gray-400 text-white rounded-full p-1">Select</button>
        </div>
    </div>
</template>