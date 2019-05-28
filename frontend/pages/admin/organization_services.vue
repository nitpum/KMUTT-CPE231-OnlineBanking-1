<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <overview-info :overviews="overviews" :data="data" />
      </v-flex>

      <v-flex xs12 sm6>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Service Usage
            </h3>
          </v-card-title>
          <v-divider />
          <heatmap v-if="showHeatmap" />
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Top Services
            </h3>
            <v-spacer />
            <v-btn color="primary">CREATE SERVICE</v-btn>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <p style="text-align:left;">
              Bill
              <span style="float:right;">
                10000
              </span>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Organization List
            </h3>
            <v-spacer />
            <v-btn color="primary">
              Create Organization
            </v-btn>
          </v-card-title>
          <v-divider />
          table here
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import OverviewInfo from '@/components/core/overview/Info'
import Heatmap from '@/components/admin/org/Heatmap'

export default {
  layout: 'admin',
  components: {
    OverviewInfo,
    Heatmap
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
        },
        {
          key: 'totalService',
          label: 'Total Service'
        },
        {
          key: 'avgSPO',
          label: 'Average Service / Organization'
        },
        {
          key: 'maxService',
          label: 'Max Service'
        }
      ],
      [
        {
          key: 'todayService',
          label: 'Today Service Usage'
        },
        {
          key: 'thisMonthService',
          label: 'This Month Service Usage'
        }
      ]
    ]
  }),
  mounted() {
    this.showHeatmap = true
  }
}
</script>
