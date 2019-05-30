<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <overview-info
          :overviews="overviews"
          :data="overviewsData"
          title="Staff Overview"
        />
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Staff List
            </h3>
            <v-spacer />
            <v-btn color="primary" class="my-0" @click="openCreateDialog">
              Create Staff
            </v-btn>
          </v-card-title>
          <v-divider />
          <list
            :items="items"
            @onItemClick="showItem"
            @onRemoveClick="removeItem"
          />
        </v-card>
      </v-flex>
    </v-layout>
    <Dialog
      v-model="dialog"
      :data="data"
      :password-editable="passwordEditable"
      :editable="true"
      :mode="dialogType"
      @onSubmit="createStaff"
    />
    <confirm-dialog
      v-model="confirmDialog"
      title="Delete confirm"
      @onYes="confimedRemove"
    />
  </v-container>
</template>

<script>
/* eslint-disable no-console */
import OverviewInfo from '@/components/core/overview/Info'
import Dialog from '@/components/core/staff/Dialog'
import ConfirmDialog from '@/components/core/ConfirmDialog'
import List from '@/components/admin/staff/List'

export default {
  layout: 'admin',
  components: {
    OverviewInfo,
    Dialog,
    ConfirmDialog,
    List
  },
  data: () => ({
    from: undefined,
    to: undefined,
    dialog: false,
    confirmDialog: false,
    dialogType: 'create',
    passwordEditable: false,
    data: {
      name: {
        firstName: '',
        lastName: ''
      },
      gender: 'Male',
      citizenId: '',
      address: '',
      zipcode: '',
      birthDate: new Date(),
      role: '',
      username: '',
      password: '',
      email: ''
    },
    overviewsData: {
      totalStaff: 0,
      avgAgeStaff: 0
    },
    overviews: [
      [
        {
          key: 'totalStaff',
          label: 'Total Staff'
        },
        {
          key: 'avgAgeStaff',
          label: 'Average Age Staff',
          place: 2
        }
      ]
    ],
    items: [],
    removePending: {}
  }),
  created() {
    this.fetch()
  },
  methods: {
    createStaff() {
      this.createDialog = false
      this.fetch()
    },
    fetch() {
      this.$axios
        .get('/staff/general/analytic/count')
        .then(({ data }) => {
          this.overviewsData = data
        })
        .catch(e => {
          this.$store.dispatch(
            'snackbars/error',
            e.response.status === 400 ? e.response.data.err : e.message
          )
        })
      this.$axios
        .get('/staff/general/query/')
        .then(res => {
          this.items = res.data
        })
        .catch(e => {
          this.$store.dispatch(
            'snackbars/error',
            e.response.status === 400 ? e.response.data.err : e.message
          )
        })
    },
    openCreateDialog() {
      this.dialog = true
      this.dialogType = 'create'
      this.passwordEditable = true
      this.data = {
        name: {
          firstName: '',
          lastName: ''
        },
        gender: 'Male',
        citizenId: '',
        address: '',
        zipcode: '',
        birthDate: new Date(),
        role: '',
        password: ''
      }
    },
    showItem(item) {
      this.dialog = true
      this.dialogType = 'update'
      this.passwordEditable = false
      this.data.id = item._id
      this.data.name = item.name
      this.data.gender = item.gender
      this.data.zipcode = item.zipcode
      this.data.address = item.address
      this.data.birthDate = item.birthDate
      if (item.branch) {
        this.data.branch = item.branch
      }
      this.data.citizenId = item.citizenId
      this.data.role = item.position
    },
    removeItem(item) {
      this.confirmDialog = true
      this.removePending = item
    },
    confimedRemove() {
      this.$axios
        .delete('/staff/general', { data: { id: this.removePending._id } })
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
