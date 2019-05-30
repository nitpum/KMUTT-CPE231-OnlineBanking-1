<template>
  <v-container>
    <v-btn color="accent" fixed bottom fab right @click="createDialog = true">
      <v-icon>add</v-icon>
    </v-btn>
    <create-dialog v-model="createDialog" @onSubmit="fetch" />
    <v-text-field
      v-model="search"
      label="Search"
      placeholder="Search"
      prepend-inner-icon="search"
      solo
    />
    <v-layout row wrap>
      <v-flex
        v-for="(account, i) in filteredAccounts"
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
import safeRegex from 'safe-regex'
import Card from '@/components/core/account/Card'
import CreateDialog from '@/components/core/account/CreateDialog'
import ConfirmDialog from '@/components/core/ConfirmDialog'

export default {
  layout: 'staff',
  components: {
    Card,
    CreateDialog,
    ConfirmDialog
  },
  data: () => ({
    accounts: [],
    pendingItem: {},
    createDialog: false,
    confirmDialog: false,
    search: ''
  }),
  computed: {
    filteredAccounts() {
      const regex = safeRegex(this.search) ? new RegExp(this.search, 'gi') : /./
      return this.accounts.filter(
        ({ accountId, holder, branch, status }) =>
          regex.test(accountId) || regex.test(holder) || regex.test(branch)
      )
    }
  },
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
      this.pendingItem.status = 'REVOKE'
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
