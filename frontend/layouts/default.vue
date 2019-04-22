<template>
  <v-app>
    <toolbar />
    <v-content>
      <nuxt />
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Toolbar from '@/components/default/Toolbar'
import theme from './themes/customer'

export default {
  components: {
    Toolbar
  },
  created() {
    this.$vuetify.theme = theme
  }
}
</script>
