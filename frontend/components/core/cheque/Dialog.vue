<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title primary-title>
        <h2>Cheque</h2>
      </v-card-title>
      <v-card-text>
        <text-label
          label="Cheque ID"
          placeholder="0-000-000-000-000-000"
        ></text-label>
        <text-label label="Type" placeholder="Type"></text-label>
        <text-label label="Bank" placeholder="Yee Bank"></text-label>
        <text-label label="Account ID" placeholder="Account ID"></text-label>
        <text-label label="Account Name" placeholder="Name"></text-label>
        <text-label label="Amount" placeholder="0.00 THB"></text-label>
        <text-label
          v-if="!editable"
          label="Drawee"
          placeholder="Drawee"
        ></text-label>
        <v-text-field
          v-if="editable"
          label="Drawee"
          placeholder="Drawee"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="model = false">Close</v-btn>
        <v-btn v-if="editable" color="primary" flat>Submit</v-btn>
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
    },
    editable: {
      type: Boolean,
      default: false
    },
    cheque: {
      type: Object,
      default: null
    }
  },
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
