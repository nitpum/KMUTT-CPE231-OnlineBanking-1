<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title primary-title>
        <h2>Create Branch</h2>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Branch Name" />
        <v-text-field v-model="address" label="Address" />
        <v-text-field v-model="zipcode" label="Zipcode" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="model = false">Close</v-btn>
        <v-btn color="primary" flat @click="$emit('onSubmit')">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    name: '',
    address: '',
    zipcode: ''
  }),
  computed: {
    model: {
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
