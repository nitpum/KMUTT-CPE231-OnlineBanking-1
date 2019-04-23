<template>
  <v-dialog v-model="model" max-width="500">
    <v-card>
      <v-card-title class="headline">
        Create Card
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field label="Owner" />
          <v-select label="Type" />
          <v-text-field label="Account No." />
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat>
          close
        </v-btn>
        <v-btn flat color="primary">
          create
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
