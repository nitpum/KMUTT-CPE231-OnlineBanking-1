<template>
  <v-container grid-list-md>
    <v-layout row justify-center wrap fill-height>
      <v-flex xs12 sm5 md4>
        <login />
      </v-flex>
      <v-flex xs12 sm7 md8>
        <advertise />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.container {
  max-width: 1200px;
}
</style>

<script>
import Login from '@/components/Login'
import Advertise from '@/components/Advertise'

export default {
  components: {
    Login,
    Advertise
  }
}
</script>
