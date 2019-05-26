<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <overview-info
          :overviews="overviews"
          :data="data"
          title="Card Overview"
        />
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
import OverviewInfo from '@/components/core/overview/Info'

export default {
  layout: 'manager',
  components: {
    OverviewInfo
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
      [
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
        }
      ],
      [
        {
          key: 'total',
          label: 'Total card'
        },
        {
          key: 'expires',
          label: 'Most expires month'
        }
      ]
    ]
  })
}
</script>
