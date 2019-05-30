<template>
  <div>
    <v-text-field
      label="Account Type"
      append-icon="search"
      data-no-underline
      :value="value && value.name ? value.name : ''"
      readonly
      @click="dialog = true"
    ></v-text-field>
    <select-dialog v-model="dialog" @onSelect="select"></select-dialog>
  </div>
</template>

<script>
import SelectDialog from './SelectDialog'

export default {
  components: {
    SelectDialog
  },
  props: {
    value: {
      type: Object,
      default() {
        return {
          _id: '',
          name: '',
          fee: '',
          interestMRound: '',
          interest: '',
          DepositRound: '',
          minDeposit: '',
          interestMin: ''
        }
      }
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    select(item) {
      this.dialog = false
      this.value._id = item._id
      this.value.name = item.name
      this.value.fee = item.fee
      this.value.interestMRound = item.interestMRound
      this.value.interest = item.interest
      this.value.DepositRound = item.DepositRound
      this.value.interestMin = item.interestMin
    }
  }
}
</script>
