<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VueFarm </span>
        <span class="font-weight-light hidden-xs-only"> Simple, fun farm game</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
          <v-btn flat>{{ level }}<v-icon right dark>stars</v-icon></v-btn>
          <v-btn flat>{{ money }}<v-icon right dark>attach_money</v-icon></v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <Map/>
    </v-content>
  </v-app>
</template>

<script>
import Map from './components/Map'

export default {
  name: 'App',
  components: {
    Map
  },
  data () {
    return {
      //
    }
  },
  computed: {
    money() {
      return this.$root.money;
    },
    level() {
      return this.$root.level;
    }
  },
}
</script>
