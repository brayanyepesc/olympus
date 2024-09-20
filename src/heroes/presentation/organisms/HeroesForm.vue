<script lang="ts" setup>
import { reactive } from 'vue';
import Title from '../../../common/presentation/atoms/Title.vue';
import { HeroesFormValues, isFormEmpty } from '../../utils/isFormEmpty';

const formValues: HeroesFormValues = reactive({
    name: null,
    agility: null,
    strength: null,
    weight: null,
    endurance: null,
    charisma: null,
    photoURL: null,
});

const handleSubmit = () => {
    console.log(formValues)
    if (isFormEmpty(formValues)) {
        console.log('Formulario enviado:', formValues);
    } else {
        console.log('Todos los campos son obligatorios');
    }
};

const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const image = new Image();
            image.src = e.target?.result as string;

            image.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = 128;
                canvas.height = 128;

                if (ctx) {
                    ctx.drawImage(image, 0, 0, 128, 128);
                    formValues.photoURL = canvas.toDataURL('image/png');
                }
            };
        };
        reader.readAsDataURL(file);
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
                    <label for="photoURL" class="text-indigo-500">Picture <span class="text-sm text-pink-500">PNG</span></label>
                    <input type="file" accept="image/png" class="border w-full rounded-lg p-5" @change="handleFileChange">
                </div>
            </div>
            <button type="submit" class="w-full col-span-2 p-2 rounded-lg bg-indigo-500 hover:bg-indigo-800 text-white">Create</button>
        </form>
    </div>
</template>
