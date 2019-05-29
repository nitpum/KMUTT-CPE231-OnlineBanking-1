<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <nuxt />
        </v-layout>
      </v-container>
    </v-content>

    <snackbars />
  </v-app>
</template>

<script>
import Snackbars from '@/components/core/Snackbars'

export default {
  components: {
    Snackbars
  }
}
</script>
