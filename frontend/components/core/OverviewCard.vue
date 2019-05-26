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
      <v-btn flat color="primary" :to="to">
        more info
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
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
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>
