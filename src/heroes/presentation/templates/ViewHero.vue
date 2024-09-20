<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useGetHeroById } from '../hooks/useGetHeroById.hook';
import { onMounted, ref } from 'vue';
import Loading from '../../../common/presentation/atoms/Loading.vue';
import { Hero } from '../../domain/Heroes.entity';
import HeroesActionsBtns from '../molecules/HeroesActionsBtns.vue';

const route = useRoute();
const hero = ref<Hero | null>(null);
const heroId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

const { isLoading, getHeroById } = useGetHeroById()

onMounted(async () => {
    const fetchedHero = await getHeroById(heroId)
    hero.value = fetchedHero || null
})
</script>

<template>
    <div v-if="!isLoading">
        <div class="mt-20 text-center mb-5 text-3xl text-indigo-500 font-bold">{{ hero?.name }}</div>
        <div class="grid grid-cols-2 gap-5 place-items-center mx-20">
            <div class="w-full flex justify-center items-center bg-gray-100 rounded-lg">
                <img v-if="hero?.picture" :src="hero.picture" alt="Hero image" class="w-96 h-96">
            </div>
            <div class="w-full h-full border shadow-md rounded-lg p-10 flex flex-col justify-between relative">
                <div v-for="(value, key) in hero?.attributes" :key="key" class="flex justify-between items-center">
                    <span class="font-bold text-gray-500 capitalize">{{ key }}</span>
                    <p class="text-sm w-8 h-5 flex justify-center items-center text-white rounded-lg p-1 bg-pink-500">
                        {{ value }}
                    </p>
                </div>
                <HeroesActionsBtns />
            </div>
        </div>
    </div>
    <div v-if="isLoading" class="flex justify-center items-center mt-52">
        <Loading />
    </div>
</template>