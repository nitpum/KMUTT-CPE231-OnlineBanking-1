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
          table here
        </v-card>
      </v-flex>
      <Dialog v-model="dialog" :mode="dialogMode" />
    </v-layout>
  </v-container>
</template>

<script>
import OverviewInfo from '@/components/core/overview/Info'
import Dialog from '@/components/admin/org/Dialog'

export default {
  layout: 'admin',
  components: {
    OverviewInfo,
    Dialog
  },
  data: () => ({
    showHeatmap: false,
    from: undefined,
    to: undefined,
    org: {},
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
    this.showHeatmap = true
  },
  methods: {
    openCreateDialog() {
      this.dialog = true
      this.dialogMode = 'create'
    }
  }
}
</script>
