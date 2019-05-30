<template>
  <div>
    <v-text-field
      label="Account ID"
      :value="item && item.accountId ? item.accountId : ''"
      append-icon="search"
      placeholder="Account ID"
      data-no-underline
      readonly
      @click="dialog = true"
    ></v-text-field>
    <select-dialog v-model="dialog" @select="select"></select-dialog>
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
        return {}
      }
    }
  },
  data: () => ({
    dialog: false
  }),
  computed: {
    item: {
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
      this.item = val
    }
  }
}
</script>
