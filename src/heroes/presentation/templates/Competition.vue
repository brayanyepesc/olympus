<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useGetHeroes } from '../hooks/useGetHeroes.hook';
import { Hero } from '../../domain/Heroes.entity';

const heroes = ref<Hero[]>([]);
const { getHeroes } = useGetHeroes();
const selectedHeroes = ref<Hero[]>([]);
    const ranking = ref<any[]>([]);
const isButtonDisabled = ref(true);

onMounted(async () => {
    const fetchedHeroes = await getHeroes();
    heroes.value = fetchedHeroes || [];
});

const toggleHeroSelection = (hero: Hero) => {
    const index = selectedHeroes.value.findIndex(h => h.id === hero.id);
    if (index !== -1) {
        selectedHeroes.value.splice(index, 1);
    } else if (selectedHeroes.value.length < 3) {
        selectedHeroes.value.push(hero);
    }
    isButtonDisabled.value = selectedHeroes.value.length !== 3;
};

const runCompetition = () => {
    const scores = selectedHeroes.value.map(hero => ({
        hero,
        totalScore: 0
    }));

    // Prueba 1: Trepar rascacielos
    scores.forEach(score => {
        score.totalScore += (score.hero.attributes.strength * 4) - (score.hero.attributes.weight * 2);
    });

    // Prueba 2: Contar chiste (carisma^2 - suma del carisma de los oponentes)
    const totalCarisma = scores.reduce((acc, score) => acc + score.hero.attributes.charisma, 0);
    scores.forEach(score => {
        const carismaOponentes = totalCarisma - score.hero.attributes.charisma;
        score.totalScore += (score.hero.attributes.charisma ** 2) - carismaOponentes;
    });

    // Prueba 3: Tiro al villano (agilidad + fuerza) + 5 si va último
    scores.forEach((score, index) => {
        const lastPlaceBonus = index === scores.length - 1 ? 5 : 0;
        score.totalScore += score.hero.attributes.agility + score.hero.attributes.strength + lastPlaceBonus;
    });

    // Prueba 4: 200km lisos (agilidad * 4) + (resistencia * 2) + bonus si quedó primero
    const sortedByScoreAfter3 = [...scores].sort((a, b) => b.totalScore - a.totalScore);
    sortedByScoreAfter3.forEach((score, index) => {
        const firstPlaceBonus = index === 0 ? 10 : -1;
        score.totalScore += (score.hero.attributes.agility * 4) + (score.hero.attributes.endurance * 2) + firstPlaceBonus;
    });

    // Prueba 5: Rescate de cien gatitos (agilidad * 2) + bonus si ganó al menos dos pruebas
    const winnersCount = sortedByScoreAfter3.reduce((acc, score) => acc + (score.totalScore > 0 ? 1 : 0), 0);
    sortedByScoreAfter3.forEach(score => {
        const twoWinsBonus = winnersCount >= 2 ? 5 : 0;
        score.totalScore += (score.hero.attributes.agility * 2) + twoWinsBonus;
    });

    // Clasificación final por puntaje total
    ranking.value = [...sortedByScoreAfter3].sort((a, b) => b.totalScore - a.totalScore);
    console.log("Ranking Final:", ranking.value);
};

const logSelectedHeroes = () => {
    runCompetition();
};
</script>

<template>
    <div class="m-20 flex flex-col justify-center space-y-8">
        <p>Select only three of the following heroes:</p>
        <div class="grid grid-cols-4 gap-4">
            <div v-for="hero in heroes" :key="hero.id" class="flex justify-between items-center border p-4 rounded-lg">
                <span class="text-gray-500">{{ hero.name }}</span>
                <button @click="toggleHeroSelection(hero)" class="bg-gray-400 text-white rounded-lg p-2"
                    :class="{ 'bg-pink-500': selectedHeroes.includes(hero) }">
                    {{ selectedHeroes.includes(hero) ? 'Deselect' : 'Select' }}
                </button>
            </div>
        </div>

        <button @click="logSelectedHeroes" :disabled="isButtonDisabled"
            class="bg-blue-500 hover:bg-blue-800 cursor-pointer text-white rounded p-2 mt-4">
            Start competition
        </button>

        <div v-if="ranking.length > 0" class="grid grid-cols-3 gap-4">
            <div v-for="(score, index) in ranking" :key="score.hero.id"
                class="flex justify-between items-center border p-4 rounded-lg">
                <span class="text-gray-500">{{ score.hero.name }}</span>
                <span class="text-gray-500">{{ score.totalScore }} points</span>
                <span class="w-10 h-10 rounded-full bg-pink-500 text-white flex justify-center items-center text-lg">{{ index + 1 }}</span>
            </div>
        </div>
    </div>
</template>