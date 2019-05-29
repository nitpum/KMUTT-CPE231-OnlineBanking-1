<template>
  <div>
    <v-text-field
      label="Service Type"
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
          type: ''
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
      this.value.type = item.type
    }
  }
}
</script>
