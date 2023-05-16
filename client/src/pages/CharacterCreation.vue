<template>
  <div>
    <div>
      <p> This is the character creation page. Here you can choose
        between all "Tier One" Wrath and Glory Archetypes!</p>
    </div>
  </div>

  <div v-if="tierOneArchetypeData.length > 0">

    <div>
      <table>
        <tr>
          <th>Archetype</th>
          <th>Species</th>
          <th>XP-Cost</th>
          <th>Keywords</th>
          <th>Attributes</th>
          <th>Skills</th>
          <th>Archetype Ability</th>
        </tr>

        <tr v-for = "( archetype ) in tierOneArchetypeData">
          <td>{{ archetype.archetypeTitle }}</td>
          <td>{{ archetype.archetypeSpecies }}</td>
          <td>{{ archetype.experiencePointCost }}</td>
          <td>{{ archetype.keywords }}</td>
          <td>{{ archetype.attributes }}</td>
          <td>{{ archetype.skills }}</td>
          <td>{{ archetype.ability }}</td>
        </tr>

      </table>
    </div>
  </div>
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