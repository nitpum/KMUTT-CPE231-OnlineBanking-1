<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-btn slot="activator" color="green" dark>
      <v-icon left>add</v-icon>
      add
    </v-btn>
    <v-card>
      <v-card-title>
        <h3 class="headline">
          Add favorite
        </h3>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Name" counter="50" />
        <v-select
          v-model="ref1"
          label="Bank"
          :items="banks"
          item-text="name"
          item-value="ref1"
        />
        <v-text-field
          v-model="ref2"
          label="Account Number"
          mask="###-#-#####-#"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat color="primary" @click="dialog = false">
          close
        </v-btn>
        <v-btn flat color="primary" @click="add()">
          save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    fetch: {
      type: Function,
      default: null
    }
  },
  data: () => ({
    dialog: false,
    name: '',
    ref1: '',
    ref2: '',
    banks: [
      {
        name: 'Yee Bank',
        ref1: '00001'
      },
      {
        name: 'Korbboon Bank',
        ref1: '00002'
      }
    ]
  }),
  methods: {
    add() {
      this.$axios
        .post('/customer/payment/favorite', {
          name: this.name,
          ref1: this.ref1,
          ref2: this.ref2
        })
        .then(res => {
          this.name = ''
          this.ref1 = ''
          this.ref2 = ''
          this.dialog = false
          this.$store.dispatch('snackbars/success', 'Success')
          this.fetch()
        })
        .catch(e => {
          this.$store.dispatch('snackbars/error', e.message)
        })
    }
  }
}
</script>
