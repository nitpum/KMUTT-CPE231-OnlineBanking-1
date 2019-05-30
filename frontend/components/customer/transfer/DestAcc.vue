<template>
  <v-layout row align-center>
    <v-flex grow>
      <v-select
        v-model="ref1"
        :items="banks"
        item-value="id"
        item-text="name"
        label="Bank"
      />
      <v-text-field v-model="ref2" label="Account No." mask="###-#-#####-#" />
    </v-flex>
    <v-flex shrink>
      <contact @selected="fill" />
    </v-flex>
  </v-layout>
</template>

<script>
import Contact from './Contact'

export default {
  components: {
    Contact
  },
  data: () => ({
    ref1: null,
    ref2: null,
    banks: ['Yee Bank', 'Korbbon Bank']
  }),
  methods: {
    fill(val) {
      this.ref1 = val.ref1
      this.ref2 = val.ref2
    }
  }
}
</script>
