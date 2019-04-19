<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 :fill-height="true">
      <v-card class="background-map-card" :img="require(`@/assets/img/background.png`)">
        <v-container grid-list-sm fluid>
          <v-layout row wrap justify-center>
            <v-flex v-for="(plant, key) in plants" :key="(plant.name, key)" xs3>
              <Soil :state="plant.state" :name="plant.name" @unplanted="plantSelector" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-bottom-sheet v-model="showPlantSelection">
      <v-list>
        <v-subheader>Select the plant</v-subheader>
        <v-list-tile v-for="plant in availablePlants" :key="plant.name">
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <img :src="require(`@/assets/img/${plant.name}.png`)" :alt="plant.name">
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>
            <p v-if="plant.time">{{ plant.name }} ({{ `${plant.time / 60} min.` }})</p>
            <p v-else>{{ plant.name }}</p>
          </v-list-tile-title>
          <v-list-tile-action>
            <v-btn @click="plantField(plant)" :disabled="money < plant.cost">
              {{ plant.cost  || '-' }}
              <v-icon>attach_money</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </v-layout>
</template>

<script>
  import Soil from './Soil';

  import PlantPeach from '../assets/plants/peach.json';
  import PlantPlum from '../assets/plants/plum.json';

  export default {
    data: () => ({
      showPlantSelection: false,
      currentField: false,
      availablePlants: [
        PlantPlum,
        PlantPeach
      ],
      plants: [{
        name: 'soil',
        state: 0
      }, {
        name: 'soil',
        state: 0
      }, {
        name: 'soil',
        state: 0
      }, {
        name: 'soil',
        state: 0
      }, {
        name: 'soil',
        state: 0
      }, {
        name: 'soil',
        state: 0
      }, {
        name: 'soil',
        state: 0
      }, {
        name: 'soil',
        state: 0
      }]
    }),
    computed: {
      money() {
        return this.$root.money;
      }
    },
    components: {
      Soil
    },
    methods: {
      plantSelector(field) {
        this.currentField = field;
        this.showPlantSelection = true;
      },
      plantField(plant) {
        this.currentField.plantField(plant.name);
        this.showPlantSelection = this.currentField = false;
        this.$root.money -= plant.cost;
      }
    }
  }
</script>

<style scoped>
  .background-map-card {
    background-size: initial !important;
    background-repeat: repeat !important;
  }
</style>