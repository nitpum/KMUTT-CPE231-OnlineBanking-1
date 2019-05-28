<template>
  <v-app :dark="$store.state.darkMode">
    <drawer v-model="drawerPannel" :items="items" :minivariant="miniVariant">
      <template v-slot:top>
        <staff-info />
        <v-divider class="mt-1" />
      </template>
    </drawer>
    <toolbar
      :dark="true"
      :color="$vuetify.theme.primary"
      :drawer.sync="drawerPannel"
      title="STAFF - Yee Netbank"
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
import theme from './themes/staff'
import StaffInfo from '@/components/StaffInfo'

export default {
  components: {
    Drawer,
    Toolbar,
    StaffInfo
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
          group: '/staff/transactions/.*',
          children: [
            {
              icon: 'add',
              text: 'Deposit',
              to: '/staff/transactions/deposit'
            },
            {
              icon: 'remove',
              text: 'Withdrawal',
              to: '/staff/transactions/withdrawal'
            },
            {
              icon: 'swap_horiz',
              text: 'Transfer',
              to: '/staff/transactions/transfer'
            },
            { icon: 'receipt', text: 'Bills', to: '/staff/transactions/bills' }
          ]
        },
        {
          icon: 'account_balance_wallet',
          title: 'Account',
          to: '/staff/account'
        },
        {
          icon: 'payment',
          title: 'Card',
          to: '/staff/cards'
        },
        {
          icon: 'mdi-checkbook',
          title: 'Cheque',
          to: '/staff/cheque'
        },
        {
          icon: 'mdi-checkbook',
          title: 'Customer'
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
