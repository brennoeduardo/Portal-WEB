<template>

    <v-card width="300" max-height="600" rounded="lm">
      <div class="d-flex justify-space-between align-center" >
        <v-card-title>{{ title }}</v-card-title>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="mdi-dots-horizontal" variant="plain" ></v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in actions" :key="index" :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
      </div>
      
      <v-card v-for="(item, index) in cards" :key="index" width="280" class="d-flex justify-center align-center mx-auto my-2">
        <v-card-title>{{item.title}}</v-card-title>

      </v-card>
        <v-divider></v-divider>
        <v-btn text="Add Card" prepend-icon="" variant="plain" color="purple" width="100%"></v-btn>
    </v-card>

</template>

<script setup>

const props = defineProps({
  title: String,
  cards: Array,
});

const actions = reactive([
  {
    title: "Add Card",
    icon: 'mdi-plus',
    action: () => console.log('add card'),
    visible: true,
  },
  
])

</script>
<style scoped>
</style>