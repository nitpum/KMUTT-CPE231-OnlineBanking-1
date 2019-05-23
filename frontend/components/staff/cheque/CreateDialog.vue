<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title primary-title>
        <h2>Create Cheque</h2>
      </v-card-title>
      <v-card-text>
        <text-label label="Type" placeholder="Type"></text-label>
        <text-label label="Bank" placeholder="Yee Bank"></text-label>
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
import TextLabel from '@/components/core/TextLabel'

export default {
  components: {
    TextLabel
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
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
