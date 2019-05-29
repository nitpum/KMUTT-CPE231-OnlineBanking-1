<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <overview-info
          :overviews="overviews"
          :data="data"
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
          <list :items="items" />
        </v-card>
      </v-flex>
    </v-layout>
    <Dialog
      v-model="createDialog"
      mode="create"
      :editable="true"
      :password-editable="true"
      title="Create Manager"
      fixed-position="manager"
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
    createDialog: false,
    data: {
      totalManager: 120,
      avgAge: 10,
      maxAge: 40,
      minAge: 20,
      mostWorkday: 300,
      minWorkday: 5,
      avgWorkday: 10
    },
    overviews: [
      [
        {
          key: 'totalManager',
          label: 'Total Manager'
        },
        {
          key: 'avgAge',
          label: 'Average Age'
        },
        {
          key: 'maxAge',
          label: 'Minimum Age'
        },
        {
          key: 'avgAge',
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
    items: []
  }),
  mounted() {
    this.fetch()
  },
  methods: {
    openCreateDialog() {
      this.createDialog = true
    },
    createManager() {
      this.createDialog = false
      this.fetch()
    },
    fetch() {
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
    }
  }
}
</script>
