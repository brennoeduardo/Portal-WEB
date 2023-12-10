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

const { $toast } = useNuxtApp();

const props = defineProps({
  value: Boolean
})

const emit = defineEmits(['input', 'register'])

const input = computed({
    show: {
      get() {
        return props.value;
      },
      set(value) {
        emit("input", value);
      },
    },
})

const form = reactive({
  nome: null,
  sobrenome: null,
  email: null,
  password: null
})

const registerUser = async () => {

    const userData = {
        name: form.nome,
        last_name: form.sobrenome,
        email: form.email,
        password: form.password,
        ativo: true,
      }

      const { data: { success, message, data }} = await axios.post("http://localhost:3000/users/", userData)

      if(!success) $toast.error(message)
      
      emit("input", false);
      $toast.success(message)
      emit("register", true);

}

</script>
<style scoped>
</style>
