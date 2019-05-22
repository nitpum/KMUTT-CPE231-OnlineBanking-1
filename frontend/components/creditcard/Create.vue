<template>
  <v-dialog v-model="model" lazy max-width="500">
    <v-card>
      <v-card-title class="headline">
        Create Card
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field label="Owner" append-icon="mdi-folder-search-outline" />
          <v-select label="Type" />
          <v-text-field
            label="Account No."
            append-icon="mdi-folder-search-outline"
          />
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat @click="model = false">
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
    value: {
      type: Boolean,
      default: false
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
