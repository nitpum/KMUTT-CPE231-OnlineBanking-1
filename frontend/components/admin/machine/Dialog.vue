<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title>
        <h3 class="headline">
          {{ title }}
        </h3>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Branch Name" required />
        <v-textarea v-model="address" label="Address" required />
        <v-text-field v-model="zipcode" label="Zipcode" mask="#####" required />
        <v-select v-model="status" label="Status" :items="status" required />
        <v-text-field v-model="type" label="Type" disabled="true" required />
        <v-text-field
          v-model="Bank1000"
          label="Bank1000"
          type="number"
          min="0"
          required
        />
        <v-text-field
          v-model="Bank500"
          label="Bank500"
          type="number"
          min="0"
          required
        />
        <v-text-field
          v-model="Bank100"
          label="Bank100"
          type="number"
          min="0"
          required
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat @click="dialog = false">
          close
        </v-btn>
        <v-btn flat color="primary">
          submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: null
    },
    type: {
      type: String,
      default: 'ATM'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    status: ['UP', 'DOWN', 'NO CASH'],
    formHasErrors: false,
    loading: false
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
