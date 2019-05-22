<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    lazy
    full-width
    width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        :label="label"
        append-icon="mdi-calendar"
        readonly
        @click:append="modal = true"
        v-on="on"
      />
    </template>
    <v-date-picker v-model="date" scrollable>
      <v-spacer />
      <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
      <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: new Date().toISOString().substr(0, 10)
    },
    label: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    modal: false
  }),
  computed: {
    date: {
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
