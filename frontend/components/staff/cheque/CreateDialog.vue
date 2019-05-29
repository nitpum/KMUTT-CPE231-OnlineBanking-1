<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title primary-title>
        <h2>Create Cheque</h2>
      </v-card-title>
      <v-card-text>
        <v-select label="Type" placeholder="Type" :items="types"></v-select>
        <v-select label="Bank" placeholder="Bank" :items="banks"></v-select>
        <v-text-field
          label="Account ID"
          placeholder="Account ID"
        ></v-text-field>
        <v-text-field
          label="Amount"
          placeholder="0.00 THB"
          type="number"
        ></v-text-field>
        <v-text-field
          label="Drawee Name"
          placeholder="Drawee Name"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="model = false">Close</v-btn>
        <v-btn color="primary" flat>Submit</v-btn>
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
    types: [],
    banks: ['Yee bank']
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
