<template>
  <div>
    <v-container>
      <dialogCus v-modle="dialog"></dialogCus>
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
          <card @onMoreInfo="dialog = true"></card>
        </v-flex>
      </v-layout>
    </v-container>
    <cus-dialog v-model="dialogCus" :editable="true"></cus-dialog>
  </div>
</template>

<script>
import Card from '@/components/core/staff/customer'
import dialogCus from '@/components/core/customer/Dialog'

export default {
  layout: 'staff',
  components: {
    Card,
    dialogCus
  },
  data: () => ({
    dialog: false,
    customer: [{}, {}, {}]
  }),
  methods: {
    dialog: function(dialog) {
      this.dialogCus = true
    }
  }
}
</script>
