<template>
  <v-app>
    <toolbar @drawer="drawer = !drawer" />
    <drawer :drawer.sync="drawer" />
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
import Drawer from '@/components/default/Drawer'

export default {
  components: {
    Toolbar,
    Drawer
  },
  data: () => ({
    drawer: false
  }),
  created() {
    this.$vuetify.theme.primary = '#00BCD4'
  }
}
</script>
