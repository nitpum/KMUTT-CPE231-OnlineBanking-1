<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <overview-info
          :overviews="overviews"
          :data="data"
          title="Account Overview"
        />
      </v-flex>

      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Account Type
            </h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <bar-chart
              v-if="showChart"
              :data="charts"
              :options="chartOptions"
              :height="300"
            />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BarChart from '@/components/core/charts/Bar.js'
import OverviewInfo from '@/components/core/overview/Info'

export default {
  layout: 'manager',
  components: {
    BarChart,
    OverviewInfo
  },
  data: () => ({
    showChart: false,
    data: {
      new: 10,
      min: 1,
      max: 10,
      average: 5,
      total: 5000,
      expires: 'March'
    },
    overviews: [
      // [
      //   {
      //     key: 'new',
      //     label: 'New account'
      //   },
      //   {
      //     key: 'min',
      //     label: 'Min new account / Month'
      //   },
      //   {
      //     key: 'max',
      //     label: 'Max new account / Month'
      //   },
      //   {
      //     key: 'average',
      //     label: 'Average new account / Month'
      //   }
      // ],
      [
        {
          key: 'total',
          label: 'Total account'
        }
      ]
    ],
    charts: {
      labels: ['Fixes', 'All Free', 'Saving'],
      datasets: [
        {
          backgroundColor: ['#00BCD4', '#EC008C', '#009688'],
          data: [200, 400, 1400]
        }
      ]
    },
    chartOptions: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }),
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$axios.get('/account/query/overview').then(({ data }) => {
        const types = Object.keys(data)
        this.charts.labels = types
        this.charts.datasets[0].data = types.map(key => data[key])
        this.showChart = true

        this.data.total = types.reduce((acc, val) => acc + data[val], 0)
      })
    }
  }
}
</script>
