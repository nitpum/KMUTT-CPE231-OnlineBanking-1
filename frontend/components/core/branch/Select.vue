<template>
  <div>
    <v-text-field
      label="Branch"
      :value="item && item.name ? item.name : ''"
      append-icon="search"
      data-no-underline
      readonly
      @click="dialog = true"
      @click:append="dialog = true"
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
      default: null
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
  watch: {
    value(val) {
      this.item = val
    }
  },
  methods: {
    select(val) {
      this.item = val
    }
  }
}
</script>
