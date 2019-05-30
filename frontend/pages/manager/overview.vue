<template>
  <v-container grid-list-lg>
    <overview-info :overviews="overviews" :data="data">
      <template v-slot:header>
        <v-layout>
          <v-flex>
            <date-picker-dialog v-model="from" label="From" />
          </v-flex>
          <v-flex>
            <date-picker-dialog v-model="to" label="To" />
          </v-flex>
        </v-layout>
      </template>
    </overview-info>
  </v-container>
</template>

<script>
import OverviewInfo from '@/components/core/overview/Info'
import DatePickerDialog from '@/components/core/DatePickerDialog'

export default {
  layout: 'manager',
  components: {
    OverviewInfo,
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
      [
        {
          key: 'totalDep',
          label: 'Total Deposit',
          place: 50000,
          suffix: 'THB'
        },
        {
          key: 'minDep',
          label: 'Minimum Deposit',
          place: 1000,
          suffix: 'THB'
        },
        {
          key: 'maxDep',
          label: 'Maximum Deposit',
          place: 20000,
          suffix: 'THB'
        },
        {
          key: 'avgDep',
          label: 'Average Deposit',
          place: 5650,
          suffix: 'THB'
        }
      ],
      [
        {
          key: 'totalWdl',
          label: 'Total Withdrawal',
          place: 10000,
          suffix: 'THB'
        },
        {
          key: 'minWdl',
          label: 'Minimum Withdrawal',
          place: 100,
          suffix: 'THB'
        },
        {
          key: 'maxWdl',
          label: 'Maximum Withdrawal',
          place: 2000,
          suffix: 'THB'
        },
        {
          key: 'avgWdl',
          label: 'Average Withdrawal',
          place: 400,
          suffix: 'THB'
        }
      ]
    ]
  })
}
</script>
