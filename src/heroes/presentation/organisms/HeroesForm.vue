<script lang="ts" setup>
import { reactive } from 'vue';
import Title from '../../../common/presentation/atoms/Title.vue';
import { isFormEmpty } from '../../utils/isFormEmpty';

const formValues = reactive({
    name: null,
    agility: null,
    strength: null,
    weight: null,
    endurance: null,
    charisma: null,
});

const handleSubmit = () => {
    if (isFormEmpty(formValues)) {
        console.log('Formulario enviado:', formValues);
    } else {
        console.log('Todos los campos son obligatorios');
    }
};

</script>

<template>
    <div class="mx-auto w-2/4 mt-10 flex flex-col justify-center items-center">
        <Title size="3xl" title="Create Hero" />
        <form @submit.prevent="handleSubmit" class="w-full grid grid-cols-2 p-5 shadow-md rounded-lg mt-5 gap-5">
            <div class="flex flex-col space-y-2">
                <label for="name" class="text-indigo-500">Name</label>
                <input v-model="formValues.name" type="text" id="name"
                    class="w-full p-1 rounded-lg bg-gray-100 outline-indigo-500">
            </div>
            <div class="flex flex-col space-y-2">
                <label for="agility" class="text-indigo-500">Agility</label>
                <input v-model="formValues.agility" type="number" id="agility"
                    class="w-full p-1 rounded-lg bg-gray-100 outline-indigo-500">
            </div>
            <div class="flex flex-col space-y-2">
                <label for="strength" class="text-indigo-500">Strength</label>
                <input v-model="formValues.strength" type="number" id="strength"
                    class="w-full p-1 rounded-lg bg-gray-100 outline-indigo-500">
            </div>
            <div class="flex flex-col space-y-2">
                <label for="weight" class="text-indigo-500">Weight</label>
                <input v-model="formValues.weight" type="number" id="weight"
                    class="w-full p-1 rounded-lg bg-gray-100 outline-indigo-500">
            </div>
            <div class="flex flex-col space-y-2">
                <label for="endurance" class="text-indigo-500">Endurance</label>
                <input v-model="formValues.endurance" type="number" id="endurance"
                    class="w-full p-1 rounded-lg bg-gray-100 outline-indigo-500">
            </div>
            <div class="flex flex-col space-y-2">
                <label for="charisma" class="text-indigo-500">Charisma</label>
                <input v-model="formValues.charisma" type="number" id="charisma"
                    class="w-full p-1 rounded-lg bg-gray-100 outline-indigo-500">
            </div>
            <div class="col-span-2 w-full">
                <div class="flex flex-col space-y-2">
                    <label for="photoURL" class="text-indigo-500">Picture</label>
                    <input type="file" class="border w-full rounded-lg p-5">
                </div>
            </div>
            <button type="submit"
                class="w-full col-span-2 p-2 rounded-lg bg-indigo-500 hover:bg-indigo-800 text-white">Create</button>
        </form>
    </div>
</template>
