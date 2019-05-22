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
    <select-dialog :dialog.sync="dialog" :select.sync="select"></select-dialog>
  </div>
</template>

<script>
import SelectDialog from '@/components/core/account/SelectDialog'
import TextLabel from '@/components/core/TextLabel'

export default {
  components: {
    SelectDialog,
    TextLabel
  },
  data: () => ({
    dialog: false,
    account: null
  }),
  computed: {
    select: {
      get() {
        return null
      },
      set(val) {
        this.$emit('update:select', val)
        this.account = val
      }
    }
  }
}
</script>
