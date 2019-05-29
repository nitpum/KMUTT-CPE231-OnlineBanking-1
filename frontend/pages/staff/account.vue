<template>
  <v-container>
    <v-btn color="accent" fixed bottom fab right @click="createDialog = true">
      <v-icon>add</v-icon>
    </v-btn>
    <create-dialog v-model="createDialog" />
    <v-text-field
      label="Search"
      placeholder="Search"
      prepend-inner-icon="search"
      solo
    />
    <v-layout row wrap>
      <v-flex v-for="(account, i) in accounts" :key="i" md4 sm12 xs12 mb-3 pr-3>
        <card
          :show-revoke-btn="true"
          :account-id="account.accountId"
          :holder="account.holder"
          :branch="account.branch"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from '@/components/core/account/Card'
import CreateDialog from '@/components/core/account/CreateDialog'

export default {
  layout: 'staff',
  components: {
    Card,
    CreateDialog
  },
  data: () => ({
    accounts: [],
    createDialog: false
  }),
  mounted() {
    this.$axios.get('/account/query/branch/me').then(({ data }) => {
      this.accounts = data.map(({ accountId, holder, branch }) => ({
        accountId,
        holder,
        branch
      }))
    })
  }
}
</script>
