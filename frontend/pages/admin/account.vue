<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <overview-info :overviews="overviews" :data="data" />
      </v-flex>

      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Account type
            </h3>
            <v-spacer />
            <v-btn color="primary" @click="openCreateDialog">
              Create Account Type
            </v-btn>
          </v-card-title>
          <v-divider />
          <lists
            :items="items"
            @onItemClick="showItem"
            @onRemoveClick="removeItem"
          />
        </v-card>
      </v-flex>
      <Dialog
        v-model="dialog"
        :data="item"
        :mode="dialogMode"
        @onSubmit="fetch()"
      />
      <confirm-dialog
        v-model="confirmDialog"
        title="Delete confirm"
        @onYes="confimedRemove"
      />
    </v-layout>
  </v-container>
</template>

<script>
import OverviewInfo from '@/components/core/overview/Info'
import Dialog from '@/components/core/account/type/Dialog'
import Lists from '@/components/admin/account/type/Lists'
import ConfirmDialog from '@/components/core/ConfirmDialog'

export default {
  layout: 'admin',
  components: {
    OverviewInfo,
    Dialog,
    ConfirmDialog,
    Lists
  },
  data: () => ({
    showHeatmap: false,
    from: undefined,
    to: undefined,
    items: [],
    dialog: false,
    dialogMode: 'create',
    confirmDialog: false,
    removePending: [],
    item: {
      _id: '',
      name: '',
      fee: '',
      interestMRound: '',
      interest: '',
      DepositRound: '',
      minDeposit: '',
      interestMin: ''
    },
    data: {
      total: 300,
      totalService: 850,
      avgSPO: 5,
      maxService: 20,
      todayService: 800,
      thisMonthService: 421561
    },
    overviews: [
      [
        {
          key: 'totalOrg',
          label: 'Total Organization'
        }
      ]
    ]
  }),
  mounted() {
    this.fetch()
  },
  methods: {
    openCreateDialog() {
      this.dialog = true
      this.dialogMode = 'create'
    },
    fetch() {
      this.$axios.get('/account/type/query').then(({ data }) => {
        this.items = data
        this.data.total = this.items.length
      })
    },
    showItem(item) {
      this.dialog = true
      this.dialogMode = 'update'
      this.passwordEditable = false
      this.item = { ...item }
    },
    removeItem(item) {
      this.confirmDialog = true
      this.removePending = item
    },
    confimedRemove() {
      this.$axios
        .delete('/account/type', { data: { id: this.removePending._id } })
        .then(_ => {
          this.$emit('onSubmit').$store.dispatch(
            'snackbars/success',
            'Remove success'
          )
          this.fetch()
        })
        .catch(e => {
          this.$store.dispatch('snackbars/show', e.message)
        })
    }
  }
}
</script>
