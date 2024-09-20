<script lang="ts" setup>
import { PencilIcon, TrashIcon, ArrowUturnLeftIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => router.push('/heroes');

</script>

<template>
    <div class="flex gap-4 absolute -bottom-5 -right-5">
        <button class="flex justify-center items-center w-10 h-10 rounded-full bg-indigo-500 text-white hover:bg-indigo-800">
            <PencilIcon class="w-4 h-4" />
        </button>
        <button class="flex justify-center items-center w-10 h-10 bg-gray-400 rounded-full text-white hover:bg-gray-500">
            <TrashIcon class="w-4 h-4" />
        </button>
        <button @click="goBack" class="flex justify-center items-center w-10 h-10 bg-gray-400 rounded-full text-white hover:bg-gray-500">
            <ArrowUturnLeftIcon class="w-4 h-4" />
        </button>
    </div>
</template>