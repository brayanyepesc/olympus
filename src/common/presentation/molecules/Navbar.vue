<script setup lang="ts">
import { onAuthStateChanged } from 'firebase/auth';
import AuthButton from '../atoms/AuthButton.vue';
import Logo from '../atoms/Logo.vue';
import NavbarLinksContainer from '../organisms/NavbarLinksContainer.vue';
import { ref, onMounted } from 'vue';
import { firebaseAuth } from '../../../firebase/firebase';
import { handleLogin, handleLogout } from '../../../auth/utils/authActions';

const isAuthenticated = ref(false);

onMounted(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
        isAuthenticated.value = !!user;
    });
});

</script>

<template>
    <nav class="w-full h-16 shadow-sm flex justify-between items-center p-4">
        <Logo size="3xl" />
        <NavbarLinksContainer />
        <div class="flex space-x-2">
            <AuthButton 
                :btnText="isAuthenticated ? 'Logout' : 'Login'" 
                :action="isAuthenticated ? handleLogout : handleLogin" 
            />
        </div>
    </nav>
</template>