<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <overview-info
          :overviews="overviews"
          :data="data"
          title="Cheque Overview"
        />
      </v-flex>

      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Cheque Usage
            </h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <line-chart :data="charts" :options="chartOptions" :height="300" />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LineChart from '@/components/core/charts/Line.js'
import OverviewInfo from '@/components/core/overview/Info'

export default {
  layout: 'manager',
  components: {
    LineChart,
    OverviewInfo
  },
  data: () => ({
    data: {
      total: 5453210,
      min: 1,
      max: 100000000,
      avg: 6553500,
      least: 'March',
      most: 'December'
    },
    overviews: [
      [
        {
          key: 'total',
          label: 'Total value of month',
          place: 2,
          suffix: 'THB'
        },
        {
          key: 'min',
          label: 'Min value',
          place: 2,
          suffix: 'THB'
        },
        {
          key: 'max',
          label: 'Max value',
          place: 2,
          suffix: 'THB'
        },
        {
          key: 'avg',
          label: 'Average value',
          place: 2,
          suffix: 'THB'
        }
      ]
      // [
      //   {
      //     key: 'least',
      //     label: 'Least usage'
      //   },
      //   {
      //     key: 'most',
      //     label: 'Most usage'
      //   }
      // ]
    ],
    charts: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      datasets: [
        {
          label: '> 100,000,000',
          fill: false,
          borderColor: ['#3F51B5'],
          backgroundColor: ['#3F51B5'],
          data: [70, 80, 65, 75, 80, 60, 95, 80, 78, 74, 80, 95, 100]
        },
        {
          label: '1,000,000 - 100,000,000',
          fill: false,
          borderColor: ['#009688'],
          backgroundColor: ['#009688'],
          data: [40, 25, 30, 50, 45, 40, 20, 10, 15, 20, 30, 50, 50]
        },
        {
          label: '0 - 1,000,000',
          fill: false,
          borderColor: ['#EC008C'],
          backgroundColor: ['#EC008C'],
          data: [10, 30, 20, 10, 9, 8, 7, 6, 5, 40, 25, 35, 45]
        }
      ]
    },
    chartOptions: {
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0
        }
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
  mounted() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$axios.get('/cheque/query/overview').then(({ data }) => {
        this.data = data
      })
    }
  }
}
</script>
