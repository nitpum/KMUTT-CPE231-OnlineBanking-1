<template>
  <v-app>
    <drawer v-model="drawerPannel" :items="items" :minivariant="miniVariant">
      <staff-info />
      <v-divider class="mt-1" />
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
            { icon: 'receipt', text: 'Bills', to: '/staff/transactions/bills' },
            {
              icon: 'bar_chart',
              text: 'Analytics',
              to: '/staff/transactions/analytics'
            }
          ]
        },
        {
          icon: 'account_balance_wallet',
          title: 'Account'
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
