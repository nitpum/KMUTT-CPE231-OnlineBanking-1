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
            <create-organization />
          </v-card-title>
          <v-divider />
          <lists />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import OverviewInfo from '@/components/core/overview/Info'
import CreateOrganization from '@/components/admin/org/CreateOrganization'
import Lists from '@/components/admin/org/Lists'

export default {
  layout: 'admin',
  components: {
    OverviewInfo,
    CreateOrganization,
    Lists
  },
  data: () => ({
    showHeatmap: false,
    from: undefined,
    to: undefined,
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
  }
}
</script>
