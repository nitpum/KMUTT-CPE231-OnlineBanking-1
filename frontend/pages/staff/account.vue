<template>
  <v-container>
    <v-btn color="accent" fixed bottom fab right @click="createDialog = true">
      <v-icon>add</v-icon>
    </v-btn>
    <create-dialog v-model="createDialog" @onSubmit="fetch" />
    <search-box :filter="fn => (filter = fn)" />
    <v-layout row wrap>
      <v-flex
        v-for="(account, i) in filter(accounts, [
          'accountId',
          'holder',
          'branch'
        ])"
        :key="i"
        md4
        sm12
        xs12
        mb-3
        pr-3
      >
        <card
          :show-revoke-btn="true"
          :account-id="account.accountId"
          :holder="account.holder"
          :branch="account.branch"
          :status="account.status"
          @onRevoke="revoke(account)"
        />
      </v-flex>
    </v-layout>
    <confirm-dialog
      v-model="confirmDialog"
      title="Revoke confirm"
      @onYes="confirmRevoke"
    />
  </v-container>
</template>

<script>
import SearchBox from '@/components/core/SearchBox'
import Card from '@/components/core/account/Card'
import CreateDialog from '@/components/core/account/CreateDialog'
import ConfirmDialog from '@/components/core/ConfirmDialog'

export default {
  layout: 'staff',
  components: {
    SearchBox,
    Card,
    CreateDialog,
    ConfirmDialog
  },
  data: () => ({
    accounts: [],
    pendingItem: {},
    createDialog: false,
    confirmDialog: false,
    search: '',
    filter: () => {}
  }),
  mounted() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$axios.get('/account/query/branch/me').then(({ data }) => {
        this.accounts = data
      })
    },
    revoke(item) {
      this.confirmDialog = true
      this.pendingItem = item
      // this.pendingItem.status = 'REVOKE'
    },
    confirmRevoke() {
      this.$axios
        .post('/account/edit', {
          id: this.pendingItem._id,
          data: this.pendingItem
        })
        .then(_ => {
          this.$store.dispatch('snackbars/success', 'Revoke success')
          this.fetch()
        })
        .catch(e => {
          this.$store.dispatch('snackbars/show', e.message)
        })
    }
  }
}
</script>
