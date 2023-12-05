<template>
  <div style="view-port-vh">
       <Header />
    </div>
  <div class="cards">
    <Cards title="Waiting" :cards="cards" />
    <Cards title="In progress" :cards="cards" />
    <Cards title="Done" :cards="cards" />
    <Cards title="Filed" :cards="cards" />

  </div>
</template>

<script setup>
const cards = ref([
   {
      title: 'Ola',
   },
   {
      title: 'Meu',
   },
   {
      title: 'Card',
   },
   {
      title: '!',
   }
]);
</script>

<style scoped>

.cards{
   display: flex;
   justify-content: center;
   gap: 10px;
   border-radius: 10px;
   margin-top: 50px;
}

</style>