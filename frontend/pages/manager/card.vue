<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Card Overview
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
              Card Expires
            </h3>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <!-- @todo: manager card expires graph -->
            graph here
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'manager',
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
        label: 'New card'
      },
      {
        key: 'min',
        label: 'Min new card / Month'
      },
      {
        key: 'max',
        label: 'Max new card / Month'
      },
      {
        key: 'average',
        label: 'Average new card / Month'
      },
      {
        key: 'total',
        label: 'Total card'
      },
      {
        key: 'expires',
        label: 'Most expires month'
      }
    ]
  })
}
</script>
