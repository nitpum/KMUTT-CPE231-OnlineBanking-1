<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title>
        <h3 class="headline">
          Pay Bills
        </h3>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="ref1"
          label="Organization Code"
          hint="Ref 1"
          persistent-hint
          :append-outer-icon="!bill ? 'search' : ''"
          :readonly="!!bill"
          @click:append-outer="listsDialog = true"
        />
        <v-text-field
          v-model="ref2"
          label="Bill Code"
          hint="Ref 2"
          persistent-hint
        />
        <v-text-field v-model="amount" label="Amount" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat color="primary" @click="dialog = false">
          close
        </v-btn>
        <v-btn flat color="primary">
          pay
        </v-btn>
      </v-card-actions>
    </v-card>

    <lists-dialog v-model="listsDialog" @select="select" />
  </v-dialog>
</template>

<script>
import ListsDialog from './ListsDialog'

export default {
  components: {
    ListsDialog
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    bill: {
      type: String,
      default: null
    }
  },
  data: () => ({
    listsDialog: false,
    d_ref1: '',
    ref2: '',
    amount: ''
  }),
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    ref1: {
      get() {
        return this.bill || this.d_ref1
      },
      set(val) {
        this.d_ref1 = val
      }
    }
  },
  methods: {
    select(ref1) {
      this.ref1 = ref1
    }
  }
}
</script>
