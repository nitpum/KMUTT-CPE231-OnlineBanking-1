<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title>
        <h3 class="headline">
          Create Account
        </h3>
      </v-card-title>
      <v-card-text>
        <f-customer v-model="customerId" />
        <v-select
          v-model="accTypeId"
          label="Account Type"
          :items="accTypes"
          item-text="text"
          item-value="id"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" flat @click="dialog = false">
          cancel
        </v-btn>
        <v-btn color="primary" flat>
          submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import FCustomer from '@/components/core/customer/FCustomer'

export default {
  components: {
    FCustomer
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    customerId: '',
    accTypeId: '',
    accTypes: [
      {
        id: 1,
        text: 'Saving Account'
      },
      {
        id: 2,
        text: 'Current Account'
      }
    ]
  }),
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
