<template>
  <div>
    <v-container>
      <v-btn color="accent" fixed bottom fab right @click="openCreateDialog">
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
          v-for="(customer, i) in customers"
          :key="i"
          md4
          sm12
          xs12
          mb-3
          pr-3
        >
          <card @onMoreInfo="openDialog"></card>
        </v-flex>
      </v-layout>
    </v-container>
    <Dialog
      v-model="createDialog"
      :password-editable="true"
      title="Create Customer"
      :editable="true"
    />
    <Dialog v-model="infoDialog" title="Edit Customer" :editable="true" />
  </div>
</template>

<script>
import Card from '@/components/core/staff/customer'
import Dialog from '@/components/core/customer/Dialog'

export default {
  layout: 'staff',
  components: {
    Card,
    Dialog
  },
  data: () => ({
    createDialog: false,
    infoDialog: false,
    customer: {},
    customers: [{}, {}, {}]
  }),
  methods: {
    openDialog: function(item) {
      this.infoDialog = true
      this.createDialog = false
    },
    openCreateDialog: function() {
      this.infoDialog = false
      this.createDialog = true
    }
  }
}
</script>
