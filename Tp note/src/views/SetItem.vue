<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

let router = useRouter();
let id = router.currentRoute.value.params.id;
let info = ref(null)

onMounted(async () => {
  await axios.get('https://api.magicthegathering.io/v1/sets/' + id)
      .then(response => {
        console.log(response.data)
        info.value = response.data.set
      })
})
</script>

<template>
<div v-if="info !== null">
  {{info.name}}
  <br>
  <span>{{info.releaseDate}}</span>
  <p>Type : {{info.type}}</p>
  <div v-if="info.onlineOnly">
    <p>Online only</p>
  </div>
</div>
</template>

<style scoped>

</style>