<template>
  <v-card>
    <v-sheet :color="color" dark class="pa-3">
      <div class="text-xs-center pt-4">
        <slot />
      </div>
      <div class="headline text-truncate pt-3">{{ title }}</div>
    </v-sheet>
    <v-card-actions>
      <v-spacer />
      <v-btn flat color="primary" @click="dialog = true">
        more info
      </v-btn>
      <card-dialog v-model="dialog" />
    </v-card-actions>
  </v-card>
</template>

<script>
import CardDialog from './CardDialog'

export default {
  components: {
    CardDialog
  },
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    value: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    dialog: false
  })
}
</script>
