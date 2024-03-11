<script setup>

import CardsInfo from "@/components/Card/CardsInfo.vue";
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";
let info = ref(null)
let cards = ref(null)
let allCardsWithSameType = ref(null)

let router = useRouter();
let id = router.currentRoute.value.params.id;
console.log(id)

onMounted(async () => {
  await axios.get('https://api.magicthegathering.io/v1/cards/'+id)
      .then(response => {
        console.log(response.data)
        info.value = response.data.card
      })

  await axios.get('https://api.magicthegathering.io/v1/cards')
      .then(response => {
        console.log(response.data)
        cards.value = response.data.cards
        allCardsWithSameType.value = cards.value.filter(card => card.type === info.value.type)
        console.log(allCardsWithSameType.value)
      })
})

</script>

<template>

  <CardsInfo v-if="info !== null" :card="info"/>
  <p v-else>Chargement... en cours</p>

  ------------------------------------

  <div v-for="card in allCardsWithSameType" v-if="allCardsWithSameType !== null">
    <router-link target="_blank" :to="{name: 'Card', params: {id: card.id}}">{{card.name}}</router-link>
  </div>

</template>

<style scoped>

</style>