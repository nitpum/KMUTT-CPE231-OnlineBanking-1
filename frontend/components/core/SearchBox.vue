<template>
  <v-text-field
    v-model="search"
    prepend-inner-icon="search"
    label="Search"
    placeholder="Search"
    solo
  />
</template>

<script>
import safe from 'safe-regex'

export default {
  props: {
    filter: {
      type: Function,
      default: null
    }
  },
  data: () => ({
    search: ''
  }),
  watch: {
    search: {
      immediate: true,
      handler(search) {
        this.filter((array, keys) => {
          const regex = safe(search) ? new RegExp(search, 'i') : /./
          return array.filter(data =>
            keys.reduce((acc, key) => acc || regex.test(data[key]), false)
          )
        })
      }
    }
  }
}
</script>
