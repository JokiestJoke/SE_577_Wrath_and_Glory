<!----><template>
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
          <th>Title</th>
          <th>Species</th>
          <th>XP</th>
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

          <SelectArchetypeButton :character="archetype.archetypeTitle" :onClick="archetypeSelectClick"></SelectArchetypeButton>

        </tr>

      </table>
    </div>
  </div>

  <div id="CharacterSheet">
    <table id="CharacterInformationTable">
      <tr>
        <th id="CharacterInformation">Character Name</th>
        <th id="CharacterInformation">Species</th>
        <th id="CharacterInformation">Archetype Title</th>
        <th id="CharacterInformation">Faction</th>
        <th id="CharacterInformation">Keywords</th>
      </tr>

      <tr>
        <td>
          <label for="characterName">CharacterName: </label>
          <input type="text" id="characterName" name="characterName">
        </td>
        <td>Test</td>
        <td>Test</td>
        <td>Test</td>
        <td>Test</td>
      </tr>

    </table>
  </div>


</template>

<script lang="ts">
export default {
  name: 'CharacterCreationPage',
  component: SelectArchetypeButton,
  methods: {
    archetypeSelectClick(){
      document.getElementById("CharacterSheet").style.visibility = "visible";
      //chosenArchetypeData =

    }
  }
};
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type {TierOneArchetypes} from './ApiInterfaces';
import SelectArchetypeButton from '../components/SelectArchetypeButton.vue';
import axios from 'axios';

//Most code goes here
let tierOneArchetypeData = ref<TierOneArchetypes[]>([])
let chosenArchetype = null;

let buttonTitle = ' Button';
let inquisitorTitle = 'Inquisitor ';

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
<style scoped>

table, th, td {
  border:1px solid whitesmoke;
}

  #CharacterSheet{
    visibility: hidden;
  }

  td, th {
    padding: 1em;
  }




</style>