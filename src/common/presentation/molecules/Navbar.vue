<script setup lang="ts">
import { authUseCases } from '../../../auth/infraestructure/dependencies';
import router from '../../../router/router';
import AuthButton from '../atoms/AuthButton.vue';
import Logo from '../atoms/Logo.vue';
import NavbarLinksContainer from '../organisms/NavbarLinksContainer.vue';

const handleLogin = async () => {
    await authUseCases.signInWithGoogle();
}

const handleLogout = async () => {
    await authUseCases.signOut();
    router.push('/'); 
}
</script>

<template>
    <nav class="w-full h-16 shadow-sm flex justify-between items-center p-4">
        <Logo size="3xl" />
        <NavbarLinksContainer />
        <div class="flex space-x-2">
            <AuthButton btnText="Login" :action="handleLogin" />
            <AuthButton btnText="Logout" :action="handleLogout" />
        </div>
    </nav>
</template>