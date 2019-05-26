<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Branch Overview
            </h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-container fluid grid-list-xl py-0>
              <v-layout row wrap>
                <v-flex
                  v-for="(col, i) in [[0, 4], [4, 6]]"
                  :key="'col-' + i"
                  xs12
                  sm6
                >
                  <p
                    v-for="overview in overviews.slice(col[0], col[1])"
                    :key="overview.key"
                    style="text-align:left;"
                  >
                    {{ overview.label }}
                    <span style="float:right;">
                      {{ data[overview.key] }}
                    </span>
                  </p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Service Usage
            </h3>
          </v-card-title>
          <v-divider />
          graph here
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Top Services
            </h3>
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
export default {
  layout: 'admin',
  data: () => ({
    from: undefined,
    to: undefined,
    data: {
      totalOrg: 300,
      totalService: 850,
      avgSPO: 5,
      maxService: 20,
      todayService: 800,
      thisMonthService: '421,561'
    },
    overviews: [
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
      },
      {
        key: 'todayService',
        label: 'Today Service Usage'
      },
      {
        key: 'thisMonthService',
        label: 'This Month Service Usage'
      }
    ]
  })
}
</script>
