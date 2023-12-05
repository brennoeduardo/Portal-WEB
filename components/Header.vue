<template>
  <v-app class="view-port-vh">
      <v-app-bar :elevation="1" height="50" rounded >
        <template v-slot:append>
          <v-menu open-on-click>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-account" v-bind="props"></v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in actions" :key="index" :value="item">
                <v-list-item color="purple" :prepend-icon="item.icon" @click="item.action">{{ item.title }}</v-list-item>
              </v-list-item>  
            </v-list>
          </v-menu>
        </template>
      </v-app-bar>
  </v-app>
</template>
<script setup>

const actions = reactive([
  {
    title: "My profile",
    icon: 'mdi-account',
    action: () => console.log('My profile'),
    visible: true,
  },
  {
    title: "My tasks",
    icon: 'mdi-calendar-check',
    action: () => console.log('My tasks'),
    visible: true,
  },
  {
    title: "Reports",
    icon: 'mdi-chart-bar',
    action: () => console.log('Reports'),
    visible: true
  },
  {
    title: "Quit",
    icon: "mdi-exit-to-app",
    action: () => console.log('Quit'),
    visible: true
  }
])

</script>
<style scoped>

.view-port-vh{
   height: 1vh
}
</style>