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
              Organization List
            </h3>
            <v-spacer />
            <v-btn color="primary" @click="openCreateDialog">
              Create Organization
            </v-btn>
          </v-card-title>
          <v-divider />
          <lists :items="orgs" />
        </v-card>
      </v-flex>
      <Dialog v-model="dialog" :mode="dialogMode" @created="fetch()" />
    </v-layout>
  </v-container>
</template>

<script>
import OverviewInfo from '@/components/core/overview/Info'
import Dialog from '@/components/admin/org/Dialog'
import Lists from '@/components/admin/org/Lists'

export default {
  layout: 'admin',
  components: {
    OverviewInfo,
    Dialog,
    Lists
  },
  data: () => ({
    showHeatmap: false,
    from: undefined,
    to: undefined,
    orgs: [],
    dialog: false,
    dialogMode: 'create',
    data: {
      totalOrg: 300,
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
      this.$axios.get('/organization/query').then(({ data }) => {
        this.orgs = data.map(item => ({
          id: item.id,
          name: item.name,
          services: 20,
          avgUsageServicePD: 300,
          maxUsageServicePD: 500,
          avgUsageServicePM: 80000,
          maxUsageServicePM: 100000
        }))
        this.data.totalOrg = this.orgs.length
      })
    }
  }
}
</script>
