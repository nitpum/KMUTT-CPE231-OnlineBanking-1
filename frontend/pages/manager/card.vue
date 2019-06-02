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
        }
      ]
    ]
  })
}
</script>
