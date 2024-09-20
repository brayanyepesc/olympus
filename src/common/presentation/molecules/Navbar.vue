<script setup lang="ts">
import { onAuthStateChanged } from 'firebase/auth';
import AuthButton from '../atoms/AuthButton.vue';
import Logo from '../atoms/Logo.vue';
import NavbarLinksContainer from '../organisms/NavbarLinksContainer.vue';
import { ref, onMounted } from 'vue';
import { firebaseAuth } from '../../../firebase/firebase';
import { handleLogin, handleLogout } from '../../../auth/utils/authActions';
import UserInfo from './UserInfo.vue';

const isAuthenticated = ref(false);
const userInformation = ref();

onMounted(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
        console.log(user)
        isAuthenticated.value = !!user;
        userInformation.value = user;
    });
});

</script>

<template>
    <nav class="w-full h-16 shadow-sm flex justify-between items-center p-4">
        <Logo size="3xl" />
        <NavbarLinksContainer />
        <div class="flex space-x-2">
            <UserInfo v-if="isAuthenticated && userInformation" :userInformation="userInformation" />
            <AuthButton 
                :btnText="isAuthenticated ? 'Logout' : 'Login'" 
                :action="isAuthenticated ? handleLogout : handleLogin" 
            />
        </div>
    </nav>
</template>