<template>
  <v-app>
    <drawer
      :items="items"
      :drawer.sync="drawerPannel"
      :minivariant="miniVariant"
    >
      <accounts />
      <v-divider class="mt-1" />
    </drawer>
    <toolbar
      :dark="true"
      color="primary"
      :drawer.sync="drawerPannel"
      @toggle="setDrawer"
    ></toolbar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import drawer from '@/components/Drawer.vue'
import toolbar from '@/components/Toolbar'
import theme from './themes/customer'
import Accounts from '@/components/customer/Accounts'

export default {
  components: {
    drawer,
    toolbar,
    Accounts
  },
  data() {
    return {
      clipped: false,
      drawerPannel: null,
      fixed: false,
      items: [
        {
          icon: 'account_balance',
          title: 'Transactions',
          to: '/app/transactions'
        },
        {
          icon: 'send',
          title: 'Transfer',
          to: '/app/transfer'
        },
        {
          icon: 'mdi-checkbook',
          title: 'Cheque'
        },
        {
          icon: 'payment',
          title: 'My Card',
          to: '/app/cards'
        },
        {
          icon: 'receipt',
          title: 'Pay Bills',
          to: '/app/bills'
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
