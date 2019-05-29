<template>
  <v-snackbar v-model="snackbar" left bottom :timeout="timeout" :color="color">
    {{ $store.state.snackbars.text }}
    <v-btn flat @click="snackbar = false">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      text: state => state.snackbars.text,
      color: state => state.snackbars.color,
      timeout: state => state.snackbars.timeout
    }),
    snackbar: {
      get() {
        return this.$store.state.snackbars.show
      },
      set() {
        this.$store.commit('snackbars/CLOSE')
      }
    }
  },
  methods: {}
}
</script>
