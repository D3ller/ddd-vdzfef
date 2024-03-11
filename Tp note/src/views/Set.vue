<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
let set = ref(null)

onMounted(async () => {
  await axios.get('https://api.magicthegathering.io/v1/sets')
      .then(response => {
        console.log(response.data)
        set.value = response.data.sets

        console.log(set.value.length)
      })
})
</script>

<template>
<p>
  <div v-for="s in set" v-if="set !== null">
    <router-link :to="'set/'+s.code">{{s.name}}</router-link>
  </div>
  <p v-else>Chargement... en cours</p>
</p>
</template>

<style scoped>

</style>