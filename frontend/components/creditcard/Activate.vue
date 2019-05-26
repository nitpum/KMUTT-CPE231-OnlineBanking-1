<template>
  <v-dialog v-model="model" max-width="500">
    <v-card>
      <v-card-title class="headline">
        Activate Card
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field
            label="Card No."
            prepend-icon="payment"
            mask="credit-card"
          />
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat @click="model = false">
          close
        </v-btn>
        <v-btn flat color="primary">
          activate
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    model: {
      get() {
        return this.dialog
      },
      set(val) {
        this.$emit('update:dialog', val)
      }
    }
  }
}
</script>
