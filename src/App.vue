<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VueFarm </span>
        <span class="font-weight-light"> Simple, fun farm game</span>
      </v-toolbar-title>
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
  }
}
</script>
