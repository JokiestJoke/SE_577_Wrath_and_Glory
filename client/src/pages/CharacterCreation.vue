<!----><template>
  <div>
    <div>
      <p> This is the character creation page. Here you can choose
        between all "Tier One" Wrath and Glory Archetypes!</p>
    </div>
    <div> <br>
      <p>
        Archetype List:
      </p>
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
          <!-- <SelectArchetypeButton :character="archetype.archetypeTitle" :onClick="archetypeSelectClick"></SelectArchetypeButton> -->
        </tr>
      </table>
      <div>
        <BasicButton :message="createCharacterButtonMessage" :onClick="createCharacter"></BasicButton>
      </div>

    </div>
  </div>

  <div id="CharacterSheet">

    <div class="dropdownArchetypeList">
      <select name="archetypeList" id="archetypeList">
        <option value="Sister-Hospitaler">Sister-Hospitaler</option>
        <option value="Ministorum Priest">Ministorum Priest</option>
        <option value="Imperial Guardsmen">Imperial Guardsmen</option>
        <option value="Inquisitor Acolyte">Inquisitor Acolyte</option>
        <option value="Inquisitor Sage">Inquisitor Sage</option>
        <option value="Ganger">Ganger</option>
        <option value="Corsair">Corsair</option>
        <option value="Corsair">Ork Boy</option>
      </select>

      <BasicButton :message="chooseArchetypeButtonMessage" :onClick="selectArchetype" ></BasicButton>

    </div>

    <div id="CharacterInformationTableOne">
      <br>
      <label>Starting Archetype Information</label>
      <table>
        <tr>
          <th>Character Name</th>
          <th>Archetype Title</th>
          <th>Species</th>
          <th>Faction</th>
          <th>Keywords</th>
          <th>XP-Cost</th>
        </tr>

        <tr>
          <td>
            <label for="characterName">CharacterName: </label>
            <input type="text" id="characterName" name="characterName">
          </td>
          <td id="playerArchetype"></td>
          <td id="playerSpecies"></td>
          <td id="playerFaction"></td>
          <td id="playerKeywords"></td>
          <th id="xpCost"></th>
        </tr>
      </table>
    </div>

    <div id="CharacterInformationTableTwo">
      <br>
      <label>Attribute Ratings:</label>
      <table>
        <tr>
          <td id="strengthLabel">Strength</td>
          <td id="toughnessLabel">Toughness</td>
          <td id="agilityLabel">Agility</td>
          <td id="willpowerLabel">Willpower</td>
          <td id="intellectLabel">Intellect</td>
          <td id="fellowshipLabel">Fellowship</td>
          <td id="speedLabel">Speed</td>
        </tr>

        <tr>
          <td id="strength"></td>
          <td id="toughness"></td>
          <td id="agility"></td>
          <td id="willpower"></td>
          <td id="intellect"></td>
          <td id="fellowship"></td>
          <td id="speed"></td>
        </tr>
      </table>
    </div>

  </div>


</template>

<script lang="ts">
export default {
  name: 'CharacterCreationPage',
  component: BasicButton,
  methods: {
    createCharacter(){
      document.getElementById("CharacterSheet").style.visibility = "visible";
    },
    selectArchetype(archetypeData){
      let archetypeSelection = document.getElementById("archetypeList").value;
      const playerArchetype = MockData.find(element => element.archetypeTitle == archetypeSelection);
      console.log(playerArchetype);

      document.getElementById("playerSpecies").textContent = playerArchetype.archetypeSpecies;
      document.getElementById("playerArchetype").textContent = playerArchetype.archetypeTitle;
      document.getElementById("playerKeywords").textContent = playerArchetype.keywords;
      document.getElementById("xpCost").textContent = playerArchetype.experiencePointCost;

      document.getElementById("strength").textContent = playerArchetype.strength;
      document.getElementById("toughness").textContent = playerArchetype.toughness;
      document.getElementById("agility").textContent = playerArchetype.agility;
      document.getElementById("willpower").textContent = playerArchetype.willpower;
      document.getElementById("intellect").textContent = playerArchetype.intellect;
      document.getElementById("fellowship").textContent = playerArchetype.fellowship;
      document.getElementById("speed").textContent = playerArchetype.speed;

    }
  }
};
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type {TierOneArchetypes} from './ApiInterfaces';
import  {MockData}  from "../../../server/db.ts";
import BasicButton from '../components/BasicButton.vue'
import axios from 'axios';

//Most code goes here
let tierOneArchetypeData = ref<TierOneArchetypes[]>([])

let createCharacterButtonMessage = "Create a Character";
let chooseArchetypeButtonMessage = "Select Archetype";

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