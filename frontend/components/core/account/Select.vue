<template>
  <div>
    <v-text-field
      label="Account ID"
      :value="account && account.id ? account.id : ''"
      append-icon="search"
      placeholder="Account ID"
      data-no-underline
      readonly
      @click="dialog = true"
    ></v-text-field>
    <text-label label="Name" :text="account ? account.name : ''"></text-label>
    <text-label
      label="Account Type"
      :text="account ? account.type : ''"
    ></text-label>
    <select-dialog v-model="dialog" @select="select"></select-dialog>
  </div>
</template>

<script>
import SelectDialog from './SelectDialog'
import TextLabel from '@/components/core/TextLabel'

export default {
  components: {
    SelectDialog,
    TextLabel
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    dialog: false,
    account: null
  }),
  computed: {
    account: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    select(val) {
      this.account = val
    }
  }
}
</script>
