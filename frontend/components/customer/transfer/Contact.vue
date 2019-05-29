<template>
  <v-dialog v-model="dialog" max-width="400">
    <v-btn slot="activator" flat icon>
      <v-icon>
        contacts
      </v-icon>
    </v-btn>

    <v-card>
      <v-card-title>
        <h3 class="headline">
          Favorites
        </h3>
        <v-spacer />
        <add-contact :fetch="() => fetch()" />
      </v-card-title>
      <v-card-text class="text-xs-right">
        <v-list two-line>
          <v-list-tile
            v-for="(contact, i) in contacts"
            :key="'contact-' + i"
            @click="selected(contact)"
          >
            <v-list-tile-content>
              <v-list-tile-title>
                {{ contact.name }}
              </v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">
                {{ contact.bank }}
              </v-list-tile-sub-title>
              <v-list-tile-sub-title>
                {{ contact.ref2 }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-spacer />

        <v-btn flat color="primary" @click="dialog = false">
          close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AddContact from './AddContact'

export default {
  components: {
    AddContact
  },
  data: () => ({
    dialog: false,
    contacts: []
  }),
  watch: {
    dialog(val) {
      if (val) {
        this.fetch()
      }
    }
  },
  methods: {
    selected(contact) {
      this.$emit('selected', contact)
      this.dialog = false
    },
    fetch() {
      this.$axios
        .get('/customer/payment/favorite')
        .then(({ data }) => {
          this.contacts = data
        })
        .catch(e => {
          this.$store.dispatch('snackbars/error', e.message)
        })
    }
  }
}
</script>
