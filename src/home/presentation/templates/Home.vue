<script lang="ts" setup>
import { authUseCases } from '../../../auth/infraestructure/dependencies';

  const googleLogin = async () => {
    try {
      await authUseCases.signInWithGoogle();
    } catch (error) {
      console.log(error)
    }
    console.log('Google login');
  };
</script>

<template>
  <h1>Home</h1>
  <button @click="googleLogin">Google Login</button>
</template>