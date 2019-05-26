<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Cheque Overview
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
                  <span style="float:right;">{{ data[overview.key] }}</span>
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

export default {
  layout: 'manager',
  components: {
    LineChart
  },
  data: () => ({
    data: {
      total: 5453210,
      min: 1,
      max: 100000000,
      average: 6553500,
      least: 'March',
      most: 'December'
    },
    overviews: [
      {
        key: 'total',
        label: 'Total value of month'
      },
      {
        key: 'min',
        label: 'Min value'
      },
      {
        key: 'max',
        label: 'Max value'
      },
      {
        key: 'average',
        label: 'Average value'
      },
      {
        key: 'least',
        label: 'Least usage'
      },
      {
        key: 'most',
        label: 'Most usage'
      }
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
  })
}
</script>
