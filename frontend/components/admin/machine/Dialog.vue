<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title>
        <h3 class="headline">
          {{ title }}
        </h3>
      </v-card-title>
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
      default: 'atm'
    },
    title: {
      type: String,
      default: ''
    }
  },
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
