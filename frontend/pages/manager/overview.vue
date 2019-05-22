<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          Overview
        </h3>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-container fluid grid-list-xl py-0>
          <v-layout>
            <v-flex mr-2>
              <date-picker-dialog v-model="from" label="From" />
            </v-flex>
            <v-flex ml-2>
              <date-picker-dialog v-model="to" label="To" />
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex
              v-for="(col, i) in [[0, 4], [4, 8]]"
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
                  {{
                    Number(data[overview.key])
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                  }}
                  THB
                </span>
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import DatePickerDialog from '@/components/core/DatePickerDialog'

export default {
  layout: 'manager',
  components: {
    DatePickerDialog
  },
  data: () => ({
    from: undefined,
    to: undefined,
    data: {
      totalDep: 587541,
      minDep: 200,
      maxDep: 100000,
      avgDep: 4000,
      totalWdl: 125452,
      minWdl: 500,
      maxWdl: 50000,
      avgWdl: 2000
    },
    overviews: [
      {
        key: 'totalDep',
        label: 'Total Deposit'
      },
      {
        key: 'minDep',
        label: 'Minimum Deposit'
      },
      {
        key: 'maxDep',
        label: 'Maximum Deposit'
      },
      {
        key: 'avgDep',
        label: 'Average Deposit'
      },
      {
        key: 'totalWdl',
        label: 'Total Withdrawal'
      },
      {
        key: 'minWdl',
        label: 'Minimum Withdrawal'
      },
      {
        key: 'maxWdl',
        label: 'Maximum Withdrawal'
      },
      {
        key: 'avgWdl',
        label: 'Average Withdrawal'
      }
    ]
  })
}
</script>
