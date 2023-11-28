<template>
    <v-app style="width: 100%; height: 100%">
      <Header/>
          <slot />
    </v-app>
</template>

<style>
  html {
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
  }
</style>