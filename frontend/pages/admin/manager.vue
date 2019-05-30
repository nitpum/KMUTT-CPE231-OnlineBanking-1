<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <overview-info
          :overviews="overviews"
          :data="overviewData"
          title="Manager Overview"
        />
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Manager List
            </h3>
            <v-spacer />
            <v-btn color="primary" class="my-0" @click="openCreateDialog">
              Create Manager
            </v-btn>
          </v-card-title>
          <v-divider />
          <list :items="items" @onItemClick="showItem" />
        </v-card>
      </v-flex>
    </v-layout>
    <Dialog
      v-model="dialog"
      mode="create"
      :editable="true"
      :password-editable="passwordEditable"
      title="Create Manager"
      :data="data"
      :fixed-position="fixedPosition"
      @onSubmit="createManager"
    />
  </v-container>
</template>

<script>
import OverviewInfo from '@/components/core/overview/Info'
import List from '@/components/admin/staff/List'
import Dialog from '@/components/core/staff/Dialog'

export default {
  layout: 'admin',
  components: {
    OverviewInfo,
    List,
    Dialog
  },
  data: () => ({
    from: undefined,
    to: undefined,
    dialog: false,
    dialogType: 'create',
    passwordEditable: false,
    fixedPosition: 'manager',
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
    overviews: [
      [
        {
          key: 'total',
          label: 'Total Manager'
        },
        {
          key: 'avgAge',
          label: 'Average Age'
        },
        {
          key: 'minAge',
          label: 'Minimum Age'
        },
        {
          key: 'maxAge',
          label: 'Maximum Age'
        }
      ],
      [
        {
          key: 'mostWorkday',
          label: 'Most Workday'
        },
        {
          key: 'minWorkday',
          label: 'Minimum Workday'
        },
        {
          key: 'avgWorkday',
          label: 'Average Workday'
        }
      ]
    ],
    overviewData: {},
    items: []
  }),
  mounted() {
    this.fetch()
  },
  methods: {
    createManager() {
      this.createDialog = false
      this.fetch()
    },
    fetch() {
      this.$axios
        .get('/staff/manager/analytic/overview')
        .then(res => {
          this.overviewData = res.data
        })
        .catch(e => {
          this.$store.dispatch(
            'snackbars/error',
            e.response.status === 400 ? e.response.data.err : e.message
          )
        })
      this.$axios
        .get('/staff/manager/query')
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
      this.fixedPosition = 'manager'
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
      this.fixedPosition = ''
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
    }
  }
}
</script>
