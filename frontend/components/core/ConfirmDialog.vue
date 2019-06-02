<template>
  <v-dialog v-model="model" lazy max-width="300" persistent>
    <v-card>
      <v-card-title primary-title>
        <h2>{{ title }}</h2>
      </v-card-title>
      <v-card-text>
        <slot>
          {{ msg }}
        </slot>
      </v-card-text>
      <v-card-actions>
        <v-btn flat @click="no">
          {{ noText }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="yes">
          {{ yesText }}
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
    },
    title: {
      type: String,
      default: 'Confirm'
    },
    message: {
      type: String,
      default: ''
    },
    yesText: {
      type: String,
      default: 'Yes'
    },
    noText: {
      type: String,
      default: 'No'
    }
  },
  data: () => ({
    loading: false
  }),
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    msg: {
      get() {
        return this.message
      }
    }
  },
  methods: {
    yes() {
      this.model = false
      this.$emit('onYes')
    },
    no() {
      this.model = false
      this.$emit('onNo')
    }
  }
}
</script>
