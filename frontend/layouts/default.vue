<template>
  <v-app>
    <toolbar />
    <v-content>
      <nuxt />
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2019</span>
    </v-footer>
    <snackbars />
  </v-app>
</template>

<script>
import Toolbar from '@/components/home/Toolbar'
import Snackbars from '@/components/core/Snackbars'
import theme from './themes/customer'

export default {
  components: {
    Snackbars,
    Toolbar
  },
  created() {
    this.$vuetify.theme = theme
  }
}
</script>
