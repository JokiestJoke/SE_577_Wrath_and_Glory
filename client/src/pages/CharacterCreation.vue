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

    <div id="characterInformationTable">
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
          <th>Archetype Ability</th>
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
          <th id="archetypeAbility"></th>
        </tr>
      </table>
    </div>

    <div id="attributeRatingsTable">
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

    <div id="skillRatingsTableOne">
      <br>
      <label>Skill Ratings:</label>
      <table>
        <tr>
          <td id="athleticsLabel">Athletics</td>
          <td id="awarenessLabel">Awareness</td>
          <td id="ballisticLabel">Ballistic Skill</td>
          <td id="cunningLabel">Cunning</td>
          <td id="deceptionLabel">Deception</td>
          <td id="insightLabel">Insight</td>
          <td id="intimidationLabel">Intimidation</td>
          <td id="investigationLabel">Investigation</td>
          <td id="leadershipLabel">Leadership</td>
        </tr>

        <tr>
          <td id="athletics"></td>
          <td id="awareness"></td>
          <td id="ballistic"></td>
          <td id="cunning"></td>
          <td id="deception"></td>
          <td id="insight"></td>
          <td id="intimidation"></td>
          <td id="investigation"></td>
          <td id="leadership"></td>
        </tr>
      </table>
    </div>

    <div id="skillRatingsTableTwo">
      <table>
        <tr>
          <td id="medicaeLabel">Medicae</td>
          <td id="persuasionLabel">Persuasion</td>
          <td id="pilotLabel">Pilot</td>
          <td id="psychicLabel">Psychic</td>
          <td id="scholarLabel">Scholar</td>
          <td id="stealthLabel">Stealth</td>
          <td id="survivalLabel">Survival</td>
          <td id="techLabel">Tech</td>
          <td id="weaponLabel">Weapon Skill</td>
        </tr>

        <tr>
          <td id="medicae"></td>
          <td id="persuasion"></td>
          <td id="pilot"></td>
          <td id="psychic"></td>
          <td id="scholar"></td>
          <td id="stealth"></td>
          <td id="survival"></td>
          <td id="tech"></td>
          <td id="weapon"></td>
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

      //general archetype data
      document.getElementById("playerSpecies").textContent = playerArchetype.archetypeSpecies;
      document.getElementById("playerArchetype").textContent = playerArchetype.archetypeTitle;
      document.getElementById("playerKeywords").textContent = playerArchetype.keywords;
      document.getElementById("xpCost").textContent = playerArchetype.experiencePointCost;
      document.getElementById("archetypeAbility").textContent = playerArchetype.ability;

      //attribute ratings
      document.getElementById("strength").textContent = playerArchetype.strength;
      document.getElementById("toughness").textContent = playerArchetype.toughness;
      document.getElementById("agility").textContent = playerArchetype.agility;
      document.getElementById("willpower").textContent = playerArchetype.willpower;
      document.getElementById("intellect").textContent = playerArchetype.intellect;
      document.getElementById("fellowship").textContent = playerArchetype.fellowship;
      document.getElementById("speed").textContent = playerArchetype.speed;

      //skill ratings
      document.getElementById("athletics").textContent = playerArchetype.athletics;
      document.getElementById("awareness").textContent = playerArchetype.awareness;
      document.getElementById("ballistic").textContent = playerArchetype.ballisticskill;
      document.getElementById("cunning").textContent = playerArchetype.cunning;
      document.getElementById("deception").textContent = playerArchetype.deception;
      document.getElementById("insight").textContent = playerArchetype.insight;
      document.getElementById("intimidation").textContent = playerArchetype.intimidation;
      document.getElementById("investigation").textContent = playerArchetype.investigation;
      document.getElementById("leadership").textContent = playerArchetype.leadership;

      //skill ratings continued
      document.getElementById("medicae").textContent = playerArchetype.medicae;
      document.getElementById("persuasion").textContent = playerArchetype.persuasion;
      document.getElementById("pilot").textContent = playerArchetype.pilot;
      document.getElementById("psychic").textContent = playerArchetype.psychic;
      document.getElementById("scholar").textContent = playerArchetype.scholar;
      document.getElementById("stealth").textContent = playerArchetype.stealth;
      document.getElementById("survival").textContent = playerArchetype.survival;
      document.getElementById("tech").textContent = playerArchetype.tech;
      document.getElementById("weapon").textContent = playerArchetype.weaponskill;

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