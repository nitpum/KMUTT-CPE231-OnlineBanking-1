<template>
  <div>
    <v-text-field
      v-model="customerId"
      label="Customer ID"
      append-outer-icon="search"
      @click:append-outer="select = selectFn()"
    />
    <select-customer v-model="select" />
  </div>
</template>

<script>
import SelectCustomer from './SelectCustomer'

export default {
  components: {
    SelectCustomer
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    select: null
  }),
  computed: {
    customerId: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    selectFn() {
      return val => {
        this.customerId = val
        this.select = null
      }
    }
  }
}
</script>
