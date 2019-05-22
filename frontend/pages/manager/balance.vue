<template>
  <v-container>
    <v-card class="mb-3">
      <v-card-title>
        <h3 class="headline mb-0">
          Balance by age
        </h3>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-container fluid grid-list-xl py-0>
          <v-layout row wrap>
            <v-flex
              v-for="(col, i) in [[0, 3], [3, 5]]"
              :key="'col-' + i"
              xs12
              sm6
            >
              <v-layout
                v-for="overview in overviews.slice(col[0], col[1])"
                :key="overview.key"
                row
              >
                <v-flex shrink>
                  <p class="text-xs-right my-0">
                    {{ overview.label }}
                  </p>
                </v-flex>
                <v-flex glow>
                  <p class="text-xs-right my-0">
                    {{ data[overview.key] }}
                  </p>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">
          Average Balance / Age
        </h3>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <!-- @todo: manager account type graph -->
        graph here
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'manager',
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
    ]
  })
}
</script>
