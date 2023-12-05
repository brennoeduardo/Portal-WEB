<template>
  <v-card class="mx-auto my-auto" width="300px" height="auto">
    <v-col>

      <v-text-field type="email" placeholder="Insira seu e-mail" variant="outlined" density="compact" v-model="email"
      ></v-text-field>
      <v-text-field type="password" placeholder="Insira sua senha" variant="outlined" density="compact" v-model="senha"
      ></v-text-field>
      
    </v-col>
    <v-col>

      <v-row class="d-flex justify-center align-center pa-3">
        <v-btn color="primary" text @click="login">Entrar</v-btn>
        <v-btn text="Cadastre-se" variant="text" @click="modal = !modal"></v-btn>
      </v-row>

    </v-col>
  </v-card>
  <Register v-model="modal" @register="modal = !modal" />
</template>

<script setup>
import axios from "axios";
import { useUsersStore } from '../store/user';
import { storeToRefs } from 'pinia';

const store = useUsersStore();

const users = storeToRefs(store);

const { $toast, $router } = useNuxtApp();


const email = ref(null);
const senha = ref(null);
const modal = ref(false);

onBeforeMount(() => {
});

const login = async () => {
  try {
    const userData = {
      email: email.value,
      password: senha.value,
    };

    const { data: {success, message, data} } = await axios.post("http://localhost:3000/users/login", userData)
    if(!success) $toast.error(message)

    $toast.success(message)
    users.userId = data
    $router.push("/home")

    userData.email = null
    userData.senha = null

  } catch (error) {
    $toast.error(error.message)
  }
}


</script>
