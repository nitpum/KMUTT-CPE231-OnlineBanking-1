<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import theme from './themes/customer'

export default {
  created() {
    this.$vuetify.theme = theme
  }
}
</script>
