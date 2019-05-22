<template>
  <v-app>
    <drawer v-model="drawerPannel" :items="items" :minivariant="miniVariant" />
    <toolbar
      :dark="true"
      :color="$vuetify.theme.primary"
      :drawer.sync="drawerPannel"
      title="ADMIN - Yee Netbank"
      @toggle="setDrawer"
    ></toolbar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Drawer from '@/components/Drawer.vue'
import Toolbar from '@/components/Toolbar'
import theme from './themes/admin'

export default {
  components: {
    Drawer,
    Toolbar
  },
  data() {
    return {
      clipped: false,
      drawerPannel: null,
      fixed: false,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Overview',
          to: '/admin/overview'
        },
        {
          icon: 'mdi-clipboard-account',
          title: 'Staff'
        },
        {
          icon: 'mdi-face',
          title: 'Manager'
        },
        {
          icon: 'mdi-domain',
          title: 'Branch'
        },
        {
          icon: 'mdi-domain',
          title: 'Organization & Services'
        },
        {
          icon: 'mdi-cloud',
          title: 'ATM'
        },
        {
          icon: 'mdi-cloud',
          title: 'ADM'
        },
        {
          icon: 'mdi-cloud',
          title: 'System',
          to: '/admin/system'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  created() {
    this.$vuetify.theme = theme
  },
  methods: {
    setDrawer(value) {
      this.drawerPannel = value
    }
  }
}
</script>
