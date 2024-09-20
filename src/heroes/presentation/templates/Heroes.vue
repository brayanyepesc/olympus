<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useGetHeroes } from '../hooks/useGetHeroes.hook';
import { Hero } from '../../domain/Heroes.entity';

const router = useRouter();
const { getHeroes } = useGetHeroes();
const heroes = ref<Hero[]>([]);

const goToCreaterANewHero = () => {
    router.push('/heroes/create');
};

onMounted(async () => {
    const fetchedHeroes = await getHeroes();
    heroes.value = fetchedHeroes || [];
});
</script>

<template>
    <div class="m-4 rounded-lg flex flex-col">
        <div class="rounded-lg bg-indigo-500 p-4 text-white text-xl relative">
            <h2>List of heroes</h2>
            <button @click="goToCreaterANewHero"
                class="absolute -bottom-4 right-4 w-10 h-10 text-pink-500 border border-pink-500 shadow-lg hover:bg-pink-500 hover:text-white transition-all cursor-pointer rounded-full bg-white flex justify-center items-center text-2xl">+</button>
        </div>
        <div class="p-4 bg-gray-100 mt-5 rounded-lg">
            <ul>
                <li v-for="hero in heroes" :key="hero.id">{{ hero.name }}</li>
            </ul>
        </div>
    </div>
</template>