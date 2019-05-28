<template>
  <v-app :dark="$store.state.darkMode">
    <drawer v-model="drawerPannel" :items="items" :minivariant="miniVariant">
      <template v-slot:top>
        <accounts />
        <v-divider class="mt-1" />
      </template>
    </drawer>
    <toolbar
      :dark="true"
      :color="$vuetify.theme.primary"
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
import Accounts from '@/components/customer/accounts/Switch'

export default {
  middleware: 'customer',
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
          title: 'Cheque',
          to: '/app/cheque'
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
          icon: 'build',
          title: 'Settings',
          group: '/app/settings/.*',
          children: [
            {
              text: 'Change Username',
              to: '/app/settings/username'
            },
            {
              text: 'Change Password',
              to: '/app/settings/password'
            }
          ]
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
