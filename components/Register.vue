<template>
  <v-dialog v-model="show">
    <v-card class="mx-auto" width="300px" height="auto">
      <v-col>
        <v-text-field placeholder="Nos diga seu nome" variant="outlined" density="compact" v-model="form.nome"
        ></v-text-field>
        <v-text-field placeholder="Nos diga seu sobrenome" variant="outlined" density="compact" v-model="form.sobrenome"
        ></v-text-field>
        <v-text-field type="email" placeholder="Insira seu e-mail" variant="outlined" density="compact" v-model="form.email"
        ></v-text-field>
        <v-text-field type="password" placeholder="Insira sua senha" variant="outlined" density="compact" v-model="form.password"
        ></v-text-field>
        <div>
          <p class="text-center font-weight-bold py-2">OU</p>
          <div class="d-flex justify-center"><Google/></div>
        </div>
      </v-col>
      <v-col>
        <v-row class="d-flex justify-center align-center pa-3">
          <v-btn color="primary" text @click="registerUser">Confirmar</v-btn>
        </v-row>
      </v-col>
    </v-card>
  </v-dialog>
</template>
<script setup>
import axios from "axios";

const props = defineProps({
  value: Boolean
})

const input = computed({
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
})

const form = reactive({
  nome: "",
  sobrenome: "",
  email: "",
  password: ""
})

const registerUser = () => {

    const userData = {
        name: this.form.nome,
        last_name: this.form.sobrenome,
        email: this.form.email,
        password: this.form.password,
        ativo: true,
      }

      axios.post("http://localhost:3000/users/", userData)
        .then((response) => {
          if (response.status == 200) {
            this.$emit("input", false);
            this.$emit("register", true);
          }
          alert("Usuário cadastrado com sucesso!");
        })
        .catch((error) => {
          console.log(error);
        });
}

</script>
<style scoped>
</style>
