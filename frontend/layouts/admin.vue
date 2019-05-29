<template>
  <v-app :dark="$store.state.darkMode">
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
    <snackbars />
  </v-app>
</template>

<script>
import Drawer from '@/components/Drawer.vue'
import Toolbar from '@/components/Toolbar'
import Snackbars from '@/components/core/Snackbars'
import theme from './themes/admin'

export default {
  middleware: 'admin',
  components: {
    Drawer,
    Toolbar,
    Snackbars
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
          title: 'Staff',
          to: '/admin/staff'
        },
        {
          icon: 'mdi-face',
          title: 'Manager',
          to: '/admin/manager'
        },
        {
          icon: 'mdi-domain',
          title: 'Branch',
          to: '/admin/branch'
        },
        {
          icon: 'mdi-domain',
          title: 'Organization & Services',
          to: '/admin/organization_services'
        },
        {
          icon: 'mdi-cloud',
          title: 'ATM',
          to: '/admin/atm'
        },
        {
          icon: 'mdi-cloud',
          title: 'ADM',
          to: '/admin/adm'
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
