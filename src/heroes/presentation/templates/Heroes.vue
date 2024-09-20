<script lang="ts" setup>
import { heroesUseCases } from '../../infreaestructure/dependencies';

    const getHeroes = async () => {
        const heroes = await heroesUseCases.getHeroes();
        console.log(heroes);
    }
</script>

<template>
    HeroesList
    <button @click="getHeroes">Get Heroes</button>
</template>