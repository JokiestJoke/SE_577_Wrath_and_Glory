<template>
  <p> This is the character creation page</p>



</template>

<script lang="ts">
export default {
  name: 'CharacterCreationPage',
};
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type {TierOneArchetypes} from './ApiInterfaces';
import axios from 'axios';

//Most code goes here
let tierOneArchetypeData = ref<TierOneArchetypes[]>([])

onMounted(async () => {
  console.log("Character Creation mounted")

  let tierOneArchetypeURI = 'http://localhost:9500/archetypes'

  //Use axios to load the student data - readup on await to make
  //async calls easier
  let archetypeAPI = await axios.get<TierOneArchetypes[]>(tierOneArchetypeURI);

  if(archetypeAPI.status == 200){
    tierOneArchetypeData.value = archetypeAPI.data
  }

})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>