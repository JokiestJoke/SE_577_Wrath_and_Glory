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
        </tr>
      </table>
      <div>
        <BasicButton :message="beginCharacterCreationMessage" :onClick="beginCharacterCreation"></BasicButton>
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
        <option value="Ork Boy">Ork Boy</option>
      </select>

      <select name="archetypeList" id="genderList">
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
      </select>

      <BasicButton :message="chooseArchetypeButtonMessage" :onClick="selectArchetype" ></BasicButton>
    </div >
  </div>

  <div id="CharacterInformationTable">
      <br>
      <label>Starting Archetype Information</label>
      <table>
        <div id="archetypeInformation">
          <tr>
            <th>Character Name</th>
            <th>Archetype Title</th>
            <th>Species</th>
            <th>Keywords</th>
            <th>XP-Cost</th>
            <th>Archetype Ability</th>
          </tr>
        </div>

        <tr v-for = "(archetype) in tierOneArchetypeData">
          <div  id="ArchetypeBasicInformation" v-if="archetype.archetypeTitle === this.playerArchetype">
            <td>
              <label for="characterName">CharacterName: </label>
              <input type="text" id="characterName" name="characterName">

              <BasicButton :message="showInspirationalNames" :onClick="showExampleNames"></BasicButton>

              <div id="nameList" v-if="wrathAndGloryNamesData.length > 0">
                <table>
                  <tr>
                    <div>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Species</th>
                    </div>
                  </tr>

                  <tr v-for = "( name ) in wrathAndGloryNamesData">
                    <div v-if="name.gender.toUpperCase() === playerGender && name.species.toUpperCase() === playerSpecies">
                      <td>{{ name.name }}</td>
                      <td>{{ name.gender }}</td>
                      <td>{{ name.species }}</td>
                    </div>
                  </tr>
                </table>

              </div>
            </td>

            <td id="playerArchetype">{{ archetype.archetypeTitle }}</td>
            <td id="playerSpecies">{{ archetype.archetypeSpecies }}</td>
            <td id="playerKeywords"> {{ archetype.keywords }} </td>
            <td id="xpCost"> {{ archetype.experiencePointCost }}</td>
            <td id="archetypeAbility">{{ archetype.ability }}</td>

          </div>
        </tr>
      </table>
  </div>

    <div>
      <br>
      <label>Attribute Ratings:</label>
    </div>

    <div id="attributeRatingsTable">
      <table id="attributesTable">
        <tr>
          <div>
            <td id="strengthLabel">Strength</td>
            <td id="toughnessLabel">Toughness</td>
            <td id="agilityLabel">Agility</td>
            <td id="willpowerLabel">Willpower</td>
            <td id="intellectLabel">Intellect</td>
            <td id="fellowshipLabel">Fellowship</td>
            <td id="speedLabel">Speed</td>
          </div>
        </tr>

        <tr  v-for = "(archetype) in tierOneArchetypeData">
          <div v-if = "archetype.archetypeTitle === this.playerArchetype">
            <td id="strength">{{ archetype.strength }}</td>
            <td id="toughness">{{ archetype.toughness }}</td>
            <td id="agility">{{ archetype.agility }}</td>
            <td id="willpower"> {{ archetype.willpower }}</td>
            <td id="intellect"> {{ archetype.intellect}}</td>
            <td id="fellowship"> {{ archetype.fellowship }}</td>
            <td id="speed"> {{ archetype.speed }} </td>
          </div>

        </tr>
      </table>
    </div>

    <div>
      <br>
      <label>Skill Ratings:</label>
    </div>

    <div id="skillRatingsTableOne">
      <table id="skillRatings">
          <tr>
            <div>
              <td id="athleticsLabel">Athletics</td>
              <td id="awarenessLabel">Awareness</td>
              <td id="ballisticLabel">Ballistic Skill</td>
              <td id="cunningLabel">Cunning</td>
              <td id="deceptionLabel">Deception</td>
              <td id="insightLabel">Insight</td>
              <td id="intimidationLabel">Intimidation</td>
              <td id="investigationLabel">Investigation</td>
              <td id="leadershipLabel">Leadership</td>
            </div>
          </tr>

        <tr v-for = "(archetype) in tierOneArchetypeData">
          <div v-if = "archetype.archetypeTitle === this.playerArchetype">
            <td id="athletics">{{ archetype.athletics }}</td>
            <td id="awareness"> {{ archetype.awareness }}</td>
            <td id="ballistic"> {{ archetype.ballisticskill }}</td>
            <td id="cunning"> {{ archetype.cunning }} </td>
            <td id="deception"> {{ archetype.deception }} </td>
            <td id="insight"> {{ archetype.insight }}</td>
            <td id="intimidation"> {{ archetype.insight }}</td>
            <td id="investigation"> {{ archetype.investigation }}</td>
            <td id="leadership"> {{ archetype.leadership }} </td>
          </div>
        </tr>
      </table>
    </div>

    <div id="skillRatingsTableTwo">
      <table>
        <tr>
          <div>
            <td id="medicaeLabel">Medicae</td>
            <td id="persuasionLabel">Persuasion</td>
            <td id="pilotLabel">Pilot</td>
            <td id="psychicLabel">Psychic</td>
            <td id="scholarLabel">Scholar</td>
            <td id="stealthLabel">Stealth</td>
            <td id="survivalLabel">Survival</td>
            <td id="techLabel">Tech</td>
            <td id="weaponLabel">Weapon Skill</td>
          </div>

        </tr>

        <tr v-for = "(archetype) in tierOneArchetypeData">
          <div v-if = "archetype.archetypeTitle === this.playerArchetype">
            <td id="medicae">{{ archetype.medicae }}</td>
            <td id="persuasion"> {{ archetype.persuasion }}</td>
            <td id="pilot"> {{ archetype.pilot }} </td>
            <td id="psychic"> {{ archetype.psychic }}</td>
            <td id="scholar">{{ archetype.scholar }}</td>
            <td id="stealth"> {{ archetype.stealth }}</td>
            <td id="survival"> {{ archetype.survival }}</td>
            <td id="tech"> {{ archetype.tech }} </td>
            <td id="weapon"> {{ archetype.weaponskill }} </td>
          </div>
        </tr>
      </table>
    </div>



</template>

<script lang="ts">
export default {
  name: 'CharacterCreationPage',
  component: BasicButton,
  methods: {
    beginCharacterCreation(){
      document.getElementById("CharacterSheet").style.visibility = "visible";
    },
    showExampleNames(){
      document.getElementById("nameList").style.visibility = "visible";
    },
    hideExampleNames(){
      document.getElementById("nameList").style.visibility = "hidden";
    },
    selectArchetype(){
      let archetypeSelection = document.getElementById("archetypeList").value;

      console.log("Selection: " + archetypeSelection)
      let genderSelection = document.getElementById("genderList").value;

      if (archetypeSelection === "Ork Boy"){
        this.playerSpecies = "ORK";
      } else if(archetypeSelection === "Corsair") {
        this.playerSpecies = "AELDARI";
      } else {
        this.playerSpecies = "HUMAN";
      }
      this.playerGender = genderSelection;
      this.playerArchetype = archetypeSelection;
    }
  },
  data() {
    return {
      playerSpecies: "DEFAULT",
      playerGender: "DEFAULT",
      playerArchetype: "DEFAULT"
    }
  }

};
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type {TierOneArchetypes} from './ApiInterfaces';
import type {WrathAndGloryNames} from './ApiInterfaces';
import BasicButton from '../components/BasicButton.vue'
import axios from 'axios';

//Most code goes here
let tierOneArchetypeData = ref<TierOneArchetypes[]>([]);
let wrathAndGloryNamesData = ref<WrathAndGloryNames[]>([]);

let beginCharacterCreationMessage = "Press to Start";
let chooseArchetypeButtonMessage = "Create Archetype";

let showInspirationalNames = "Show Example Names";


onMounted(async () => {
  console.log("Character Creation mounted")

  let tierOneArchetypeURI = 'http://localhost:9500/archetypes'
  let wrathAndGloryNamesURI = 'http://localhost:9500/names'

  //Use axios to load the student data - readup on await to make
  //async calls easier
  let archetypeAPI = await axios.get<TierOneArchetypes[]>(tierOneArchetypeURI);

  let namesAPI = await axios.get<TierOneArchetypes[]>(wrathAndGloryNamesURI);

  if(archetypeAPI.status == 200){
    tierOneArchetypeData.value = archetypeAPI.data
  }

  if(namesAPI.status == 200){
    wrathAndGloryNamesData.value = namesAPI.data
  }

})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table, th, td {
  border:1px solid whitesmoke;
}

#attributeRatingsTable {
  display: flex;
}

#CharacterInformationTable {
  display: inline;
}

#CharacterSheet {
  visibility: hidden;
}

#nameList {
  visibility: hidden;
}

td, th {
  padding: 1em;
}




</style>