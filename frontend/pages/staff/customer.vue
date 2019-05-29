<template>
  <v-container>
    <v-btn color="accent" fixed bottom fab right>
      <v-icon>add</v-icon>
    </v-btn>
    <v-text-field
      label="Search"
      placeholder="Search"
      prepend-inner-icon="search"
      solo
    />
    <v-layout row wrap>
      <v-flex
        v-for="(customer, i) in customer"
        :key="i"
        md4
        sm12
        xs12
        mb-3
        pr-3
      >
        <card></card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from '@/components/core/staff/customer'

export default {
  layout: 'staff',
  components: {
    Card
  },
  data: () => ({
    customer: [{}, {}, {}]
  })
}
</script>
