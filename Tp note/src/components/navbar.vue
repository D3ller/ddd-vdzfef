<script setup>

</script>

<template>
  <div class="flex">
<router-link :to="{ name: 'Cards' }">
  Cartes
</router-link>
  <router-link :to="{ name: 'Sets' }">
    Set
  </router-link>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 20px;
}
</style>