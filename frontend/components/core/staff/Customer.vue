<template>
  <v-card>
    <v-card-title primary-title class="mb-0 pb-0">
      <h3 class="headline mb-0">{{ name }}</h3>
    </v-card-title>
    <v-card-text class="pt-0 pb-1 grey--text">
      {{ citizenId }}
    </v-card-text>
    <v-card-text v-if="branch" class="pt-0 pb-1 grey--text">
      Branch: {{ branch }}
    </v-card-text>
    <v-card-text v-if="bank" class="pt-0 pb-1 grey--text">
      {{ bank }}
    </v-card-text>
    <v-card-text v-if="balance" class="pt-0 pb-1 grey--text">
      Balance: {{ balance }}
    </v-card-text>
    <v-divider class="mt-4" />
    <v-card-actions>
      <v-spacer />
      <v-btn flat>
        More Info
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Euei Naja'
    },
    citizenId: {
      type: String,
      default: '1-1199-115888-28'
    }
  }
}
</script>
