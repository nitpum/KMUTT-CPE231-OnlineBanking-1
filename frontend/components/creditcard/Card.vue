<template>
  <v-card>
    <v-card-title primary-title class="mb-0 pb-0">
      <div>
        <h3 class="headline mb-0">{{ cardNumber }}</h3>
        <div></div>
      </div>
    </v-card-title>
    <v-card-text class="pt-0 pb-1 grey--text">
      {{ holder }}
    </v-card-text>
    <v-card-text class="pt-0 pb-1 grey--text">
      {{ cardType }}
      <template v-if="provider">
        ({{ provider.toUpperCase() }})
      </template>
    </v-card-text>
    <v-card-text v-if="accountId" class="pt-0 pb-0 grey--text">
      Account: {{ accountId }}
    </v-card-text>
    <v-divider class="mt-4" />
    <v-card-actions>
      <v-spacer />
      <v-btn v-if="showResetPin" flat color="red" @click="$emit('resetPin')">
        RESET PIN
      </v-btn>
      <v-btn flat color="red" @click="$emit('onRevoke')">
        REVOKE
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CreditCard',
  props: {
    number: {
      type: String,
      default: '0000-1111-2222-3333'
    },
    holder: {
      type: String,
      default: 'Firstname Lastname'
    },
    cardType: {
      type: String,
      default: 'Debit card'
    },
    provider: {
      type: String,
      default: 'VISA'
    },
    accountId: {
      type: String,
      default: ''
    },
    showResetPin: {
      type: Boolean,
      default: false
    },
    censor: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cardNumber() {
      return !this.censor
        ? this.number
        : this.number
            .split('-')
            .map((x, i) => {
              if (i === 0 || i === 3) return x
              return x
                .split('')
                .map(_ => 'x')
                .join('')
            })
            .join('-')
    }
  }
}
</script>
