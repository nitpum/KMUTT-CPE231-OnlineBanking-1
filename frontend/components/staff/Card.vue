<template>
  <v-card>
    <v-card-title primary-title class="mb-0 pb-0">
      <h3 class="headline mb-0">{{ name }}</h3>
    </v-card-title>
    <v-card-text class="pt-0 pb-1 grey--text">
      {{ gender }}
    </v-card-text>
    <v-card-text class="pt-0 pb-1 grey--text">
      {{ role }}
    </v-card-text>
    <v-divider class="mt-4" />
    <v-card-actions>
      <v-spacer />
      <v-btn
        v-if="showMoreInfoBtn"
        color="primary"
        flat
        @click="$emit('onMoreInfo')"
      >
        MORE INFO
      </v-btn>
      <v-btn v-if="showEditBtn" flat color="primary" @click="$emit('onEdit')">
        EDIT
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CreditCard',
  props: {
    name: {
      type: String,
      default: 'Firstname Lastname'
    },
    gender: {
      type: String,
      default: 'Male'
    },
    role: {
      type: String,
      default: 'Staff'
    },
    showMoreInfoBtn: {
      type: Boolean,
      default: true
    },
    showEditBtn: {
      type: Boolean,
      default: false
    }
  }
}
</script>
