<template>
  <v-app>
    <drawer
      :items="items"
      :drawer="drawerPannel"
      :minivariant="miniVariant"
    ></drawer>
    <toolbar
      :dark="true"
      :color="theme.primary"
      :drawer="drawerPannel"
      @toggle="setDrawer"
    ></toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import drawer from '@/components/Drawer.vue'
import toolbar from '@/components/Toolbar'
import colors from 'vuetify/es5/util/colors'

export default {
  components: {
    drawer,
    toolbar
  },
  data() {
    return {
      clipped: false,
      drawerPannel: true,
      fixed: false,
      items: [
        {
          icon: 'account_balance',
          title: 'Transactions',
          to: '/customer/'
        },
        {
          icon: 'send',
          title: 'Transfer'
        },
        {
          icon: 'input',
          title: 'Cheque'
        },
        {
          icon: 'payment',
          title: 'My Card'
        },
        {
          icon: 'receipt',
          title: 'Pay Bills'
        },
        {
          icon: 'account_balance_wallet',
          title: 'Account'
        },
        {
          icon: 'build',
          title: 'Settings'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      theme: {
        primary: colors.cyan.base
      }
    }
  },
  methods: {
    setDrawer(value) {
      this.drawerPannel = value
    }
  }
}
</script>
