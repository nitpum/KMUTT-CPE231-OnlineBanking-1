<template>
  <v-card :disabled="disabled">
    <v-card-title primary-title class="mb-0 pb-0">
      <h3 class="headline mb-0">{{ accountId }}</h3>
    </v-card-title>
    <v-card-text class="pt-0 pb-1 grey--text">
      {{ holder }}
    </v-card-text>
    <v-card-text v-if="branch" class="pt-0 pb-1 grey--text">
      Branch: {{ branch }}
    </v-card-text>
    <v-card-text v-if="bank" class="pt-0 pb-1 grey--text">
      {{ bank }}
    </v-card-text>
    <v-card-text v-if="balance" class="pt-0 pb-1 grey--text">
      Balance: {{ balance }} {{ status }}
    </v-card-text>
    <v-divider class="mt-4" />
    <v-card-actions v-if="!disabled">
      <v-spacer />
      <v-btn v-if="showRevokeBtn" flat colo="red" @click="$emit('onRevoke')">
        Revoke
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    accountId: {
      type: String,
      default: '000-0-000000-0'
    },
    holder: {
      type: String,
      default: 'Firstname Lastname'
    },
    bank: {
      type: String,
      default: ''
    },
    balance: {
      type: Number,
      default: 0
    },
    branch: {
      type: String,
      default: 'Bangmod'
    },
    status: {
      type: String,
      default: 'ACTIVE'
    },
    showRevokeBtn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    disabled() {
      return this.status === 'REVOKE'
    }
  }
}
</script>
