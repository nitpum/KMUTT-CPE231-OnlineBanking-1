<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <overview-info
          :overviews="overviews"
          :data="data"
          title="Balance by age"
        />
      </v-flex>

      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Average Balance / Age
            </h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <bar-chart :data="charts" :options="chartOptions" :height="300" />
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
    data: {
      min: 1,
      max: 100000000,
      average: 500000,
      least: '1 - 15',
      most: '30 - 50'
    },
    overviews: [
      [
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
          key: 'average',
          label: 'Average value',
          place: 2,
          suffix: 'THB'
        }
      ],
      [
        {
          key: 'least',
          label: 'Least balance age'
        },
        {
          key: 'most',
          label: 'Most balance age'
        }
      ]
    ],
    charts: {
      labels: ['1 - 15', '15 - 30', '30 - 50', '50 - 80'],
      datasets: [
        {
          backgroundColor: ['#00BCD4', '#EC008C', '#3F51B5', '#6202EE'],
          data: [41, 74, 163, 132]
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
  })
}
</script>
