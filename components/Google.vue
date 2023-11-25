<template>
  <GoogleSignInButton
    @success="handleSignInSuccess"
    @error="handleSignInError"
  />
</template>

<script setup lang="ts">
import type { CredentialResponse } from "vue3-google-signin";
import { GoogleSignInButton, decodeCredential } from "vue3-google-signin";

const handleSignInSuccess = (response: CredentialResponse) => {
  const { credential } : any = response;
  const decodedCredential = decodeCredential(credential);
  console.log("User:", decodedCredential);
};

const handleSignInError = () => {
  console.error("Signin Failed");
};

</script>


<style scoped>
</style>