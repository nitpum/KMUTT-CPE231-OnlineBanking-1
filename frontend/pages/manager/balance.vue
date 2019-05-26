<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <v-card class="mb-3">
          <v-card-title>
            <h3 class="headline mb-0">
              Balance by age
            </h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-layout row wrap>
              <v-flex
                v-for="(col, i) in [[0, 3], [3, 5]]"
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

export default {
  layout: 'manager',
  components: {
    BarChart
  },
  data: () => ({
    data: {
      min: '1',
      max: '100,000,000',
      average: '500,000',
      least: '1 - 15',
      most: '30 - 50'
    },
    overviews: [
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
        label: 'Least balance age'
      },
      {
        key: 'most',
        label: 'Most balance age'
      }
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
