<template>
  <div>
    <v-container>
      <v-btn
        color="accent"
        fixed
        bottom
        fab
        right
        @click="openCreateDialog"
        @onSubmit="fetch"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-text-field
        v-model="search"
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
          <card
            :name="customer.name"
            :citizen-id="customer.citizenId"
            @onMoreInfo="openDialog(customer)"
          ></card>
        </v-flex>
      </v-layout>
    </v-container>
    <Dialog
      v-model="createDialog"
      :password-editable="true"
      title="Create Customer"
      :editable="true"
      mode="create"
      @onSubmit="createStaff"
    />
    <Dialog
      v-model="infoDialog"
      :data="customer"
      title="Edit Customer"
      :editable="true"
      mode="update"
    />
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
    customer: {
      name: {
        firstName: '',
        lastName: ''
      },
      gender: 'Undefined',
      citizenId: '',
      address: '',
      zipcode: '',
      birthDate: new Date().toISOString().split('T')[0],
      phone: '',
      username: '',
      status: '',
      email: '',
      lastaccess: ''
    },
    customers: [],
    search: ''
  }),
  watch: {
    search: {
      immediate: true,
      handler(val) {
        this.fetch()
      }
    }
  },
  methods: {
    openDialog: function(item) {
      this.infoDialog = true
      this.createDialog = false
      /* eslint-disable no-console */
      this.customer = { ...item }
    },
    openCreateDialog: function() {
      this.infoDialog = false
      this.createDialog = true
    },
    createStaff() {
      this.createDialog = false
    },
    fetch() {
      this.$axios
        .get('/customer/query', {
          params: {
            search: this.search
          }
        })
        .then(({ data }) => {
          this.customers = data
        })
    }
  }
}
</script>
