<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Branch Overview
            </h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
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
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Branch List
            </h3>
            <v-spacer />
            <v-btn color="primary" class="my-0">
              Create Branch
            </v-btn>
          </v-card-title>
          <v-divider />
          <branch-list />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BranchList from '@/components/admin/BranchList'

export default {
  layout: 'admin',
  components: {
    BranchList
  },
  data: () => ({
    from: undefined,
    to: undefined,
    data: {
      totalBranch: 120,
      minStaff: 10,
      maxStaff: 40,
      avgStaff: 20,
      mostTransaction: '300 (BangMod)',
      avgTranPStaff: 5
    },
    overviews: [
      {
        key: 'totalBranch',
        label: 'Total Branch'
      },
      {
        key: 'minStaff',
        label: 'Minimum Staff'
      },
      {
        key: 'maxStaff',
        label: 'Maximum Staff'
      },
      {
        key: 'avgStaff',
        label: 'Average Staff'
      },
      {
        key: 'mostTransaction',
        label: 'Most Transaction'
      },
      {
        key: 'avgTranPStaff',
        label: 'Average Transaction / Staff'
      }
    ]
  })
}
</script>
