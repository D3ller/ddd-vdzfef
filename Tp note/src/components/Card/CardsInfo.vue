<script setup>
let props = defineProps({
  card: Object
})

console.log(props.card.foreignNames);

</script>

<template>

<div class="cards">
<h1>{{card.foreignNames === undefined ? card.name : card.foreignNames[2].name}}</h1>
  <img :src="card.foreignNames === undefined ? card.imageUrl : card.foreignNames[2].imageUrl" alt="">
  <p>{{card.foreignNames === undefined ? card.text : card.foreignNames[2].text}}</p>
  <span>Faveur: {{card.foreignNames === undefined ? card.flavor : card.foreignNames[2].flavor}}</span>
  <p>Coute de mana {{card.manaCost}}</p>
  <p>Rareté : {{card.rarity === "Uncommon" ? "Peu commune" : card.rarity === "Common" ? "Commune" : card.rarity === "Rare" ? "Rare" : card.rarity}}</p>


  <router-link target="_blank" v-if="card.variations" v-for="variation in card.variations" :to="{name: 'Card', params: {id: variation}}">{{variation}}</router-link>
  <p v-else>Il n'y a pas de variation pour cette carte</p>
</div>




</template>

<style scoped>

</style>