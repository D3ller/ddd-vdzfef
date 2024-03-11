<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import CardsInfo from "@/components/Card/CardsInfo.vue";
let cards = ref(null)
let cardsFilter = ref(null)
let search = ref('')
let firstNumber = ref(0)
let lastNumber = ref(10)
let arrow = ref(true)

onMounted(async () => {
  await axios.get('https://api.magicthegathering.io/v1/cards')
      .then(response => {
        console.log(response.data)
        cards.value = response.data.cards
        cardsFilter.value = response.data.cards

        console.log(cards.value.length)
      })
})

function updateRarity(event) {
  if(event.target.value === "All") {
    cards.value = cardsFilter.value
    return
  }

  cards.value = cardsFilter.value.filter(card => card.rarity === event.target.value)
  console.log(cardsFilter.value)
}

function updateByName(event) {
  cards.value = cardsFilter.value.filter(card => card.name.toLowerCase().includes(event.target.value.toLowerCase()))
}

function back() {

  firstNumber.value -= 10
  lastNumber.value -= 10

  if(lastNumber.value < 10) {
    lastNumber.value = 10
  }

  if(firstNumber.value < 0) {
    firstNumber.value = 0
  }

}

function up() {

  firstNumber.value += 10
  lastNumber.value += 10

  if(lastNumber.value > 100) {
    lastNumber.value = 100
  }

  if(firstNumber.value > 90) {
    firstNumber.value = 90
  }


}

function showAll(event) {
  if(event.target.checked) {

    firstNumber.value = 0
    lastNumber.value = 100
  arrow.value = false
  } else {
    if(lastNumber.value > 100) {
      lastNumber.value = 100
    }

    cards.value = cardsFilter.value
    firstNumber.value = 0
    lastNumber.value = 10
    arrow.value = true
  }
}

</script>

<template>

  <input type="checkbox" @input="showAll" id="showAll">

<select name="rarity" id="rarity" @change="updateRarity">
  <option value="All">Toutes les cartes</option>
  <option value="Common">Commune</option>
  <option value="Uncommon">Peu commune</option>
  <option value="Rare">Rare</option>
</select>

  <input type="text" v-model="search" placeholder="Rechercher une carte" @input="updateByName($event)">

<div v-for="card in cards.slice(firstNumber,lastNumber)" v-if="cards !== null">
  <router-link :to="'card/'+card.id">{{card.name}}</router-link>
</div>
<p v-else>Chargement... en cours</p>

  <div v-if="cards !== null && arrow">
    <button @click="back"><</button>
    <button @click="up">></button>
  </div>


</template>

<style scoped>

</style>