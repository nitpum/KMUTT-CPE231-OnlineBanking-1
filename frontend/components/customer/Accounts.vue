<template>
  <v-list>
    <v-list-tile class="pt-2">
      <v-list-tile-content>
        <v-list-tile-title>{{ account.id }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ account.type }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-actions>
        <v-btn icon>
          <v-icon>arrow_drop_down</v-icon>
        </v-btn>
      </v-list-tile-actions>
    </v-list-tile>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      account: 'customer/currentAcc'
    })
  }
}
</script>
