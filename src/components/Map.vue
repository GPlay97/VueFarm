<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 :fill-height="true">
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap justify-center>
            <v-flex v-for="plant in plants" :key="plant.name" xs3>
              <Soil :state="plant.state" :name="plant.name" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import Soil from './Soil';

  export default {
    data: () => ({
      plants: [{
        name: 'soil',
        state: 0
      }]
    }),
    components: {
      Soil
    }
  }
</script>

<style scoped>

</style>