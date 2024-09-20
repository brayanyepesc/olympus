<script lang="ts" setup>
import { PencilIcon, TrashIcon, ArrowUturnLeftIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';
import { useDeleteHero } from '../hooks/useDeleteHero.hook';

const { heroId } = defineProps<{ heroId: string | undefined }>()
const { deleteHero } = useDeleteHero()

const router = useRouter();
const goBack = () => router.push('/heroes');

const handleDelete = async () => {
    if (heroId) {
        await deleteHero(heroId)
        router.push('/heroes')
    }
}

</script>

<template>
    <div class="flex gap-4 absolute -bottom-5 -right-5">
        <button @click="handleDelete"
            class="flex justify-center items-center w-10 h-10 bg-gray-400 rounded-full text-white hover:bg-gray-500">
            <TrashIcon class="w-4 h-4" />
        </button>
        <button @click="goBack"
            class="flex justify-center items-center w-10 h-10 bg-gray-400 rounded-full text-white hover:bg-gray-500">
            <ArrowUturnLeftIcon class="w-4 h-4" />
        </button>
    </div>
</template>