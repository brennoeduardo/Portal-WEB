<template>
  <v-card class="mx-auto my-auto" width="300px" height="auto">
    <v-col>
      <v-text-field
        type="email"
        placeholder="Insira seu e-mail"
        variant="outlined"
        density="compact"
        v-model="email"
      ></v-text-field>
      <v-text-field
        type="password"
        placeholder="Insira sua senha"
        variant="outlined"
        density="compact"
        v-model="senha"
      ></v-text-field>
    </v-col>
    <v-col>
      <v-row class="d-flex justify-center align-center pa-3">
        <v-btn color="primary" text @click="login">Entrar</v-btn>
        <v-btn
          text="Cadastre-se"
          variant="text"
          @click="modal = !modal"
        ></v-btn>
      </v-row>
    </v-col>
  </v-card>
  <Register v-model="modal" @register="modal = !modal" />
</template>

<script setup>
import axios from "axios";
const { $toast, $router } = useNuxtApp();

const email = ref("");
const senha = ref("");
const modal = ref(false);

onBeforeMount(() => {
  getUsers();
});

const getUsers = () => {
  axios.get("http://localhost:3000/users/")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const login = () => {
  const userData = {
    email: email.value,
    password: senha.value,
  };
  axios
    .post("http://localhost:3000/users/login", userData)
    .then((response) => {
      if (!response.data.success) $toast.error(response.data.message);
      else $router.push("/home");
    })
    .catch((error) => {
      console.log(error);
      $toast.error("Erro ao fazer login");
    });
  userData.email = null;
  userData.senha = null;
};
</script>
