<template>
  <v-container>
    <v-card class="mb-3">
      <v-card-title>
        <h3 class="headline mb-0">
          Account Overview
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
                <span style="float:right;">{{ data[overview.key] }}</span>
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          Account Type
        </h3>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <bar-chart :data="charts" :options="chartOptions" :height="300" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import BarChart from '@/components/cores/charts/Bar.js'

export default {
  layout: 'manager',
  components: {
    BarChart
  },
  data: () => ({
    data: {
      new: 10,
      min: 1,
      max: 10,
      average: 5,
      total: 5000,
      expires: 'March'
    },
    overviews: [
      {
        key: 'new',
        label: 'New account'
      },
      {
        key: 'min',
        label: 'Min new account / Month'
      },
      {
        key: 'max',
        label: 'Max new account / Month'
      },
      {
        key: 'average',
        label: 'Average new account / Month'
      },
      {
        key: 'total',
        label: 'Total account'
      }
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
  })
}
</script>
