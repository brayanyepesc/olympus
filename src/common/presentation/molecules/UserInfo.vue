<script lang="ts" setup>
import { getFirstName } from '../../utils/getFirstname';

const { userInformation } = defineProps<{ userInformation: { photoURL: string, displayName: string } }>()
</script>

<template>
    <div class="flex items-center space-x-2">
        <span v-if="userInformation.displayName" class="text-gray-500">{{ getFirstName(userInformation.displayName)
            }}</span>
        <div class="rounded-full p-1 border border-dashed border-indigo-500">
            <img v-if="userInformation.photoURL" :src="userInformation.photoURL" alt="Profile picture from Google"
                class="w-10 h-10 rounded-full">
        </div>
    </div>
</template>