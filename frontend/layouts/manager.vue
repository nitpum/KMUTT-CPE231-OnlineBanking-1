<template>
  <v-app :dark="$store.state.darkMode">
    <drawer v-model="drawerPannel" :items="items" :minivariant="miniVariant">
      <template v-slot:top>
        <staff-info />
        <v-divider class="mt-1" />
      </template>
      <template v-slot:after-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-switch v-model="darkMode" color="primary"></v-switch>
          </v-list-tile-action>
          <v-list-tile-content>
            Dark Mode
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </drawer>
    <toolbar
      :dark="true"
      :color="$vuetify.theme.primary"
      :drawer.sync="drawerPannel"
      title="MANAGER - Yee Netbank"
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
import theme from './themes/manager'
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
          icon: 'mdi-view-dashboard',
          title: 'Overview',
          to: '/manager/overview'
        },
        {
          icon: 'account_balance_wallet',
          title: 'Customer',
          to: '/manager/customer'
        },
        {
          icon: 'mdi-clipboard-account',
          title: 'Staff',
          to: '/manager/staff'
        },
        {
          icon: 'mdi-domain',
          title: 'Balance',
          to: '/manager/balance'
        },
        {
          icon: 'mdi-bank',
          title: 'Transactions',
          children: [
            {
              icon: 'add',
              text: 'Deposit',
              to: '/manager/transactions/deposit'
            },
            {
              icon: 'remove',
              text: 'Withdrawal',
              to: '/manager/transactions/withdrawal'
            },
            {
              icon: 'swap_horiz',
              text: 'Transfer',
              to: '/manager/transactions/transfer'
            },
            {
              icon: 'receipt',
              text: 'Bills',
              to: '/manager/transactions/bills'
            }
          ]
        },
        {
          icon: 'account_balance_wallet',
          title: 'Account',
          to: '/manager/account'
        },
        {
          icon: 'mdi-credit-card',
          title: 'Card',
          to: '/manager/card'
        },
        {
          icon: 'mdi-checkbook',
          title: 'Cheque',
          to: '/manager/cheque'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    darkMode: {
      get() {
        return this.$store.state.darkMode
      },
      set(val) {
        this.$store.commit('SET_DARKMODE', val)
      }
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
