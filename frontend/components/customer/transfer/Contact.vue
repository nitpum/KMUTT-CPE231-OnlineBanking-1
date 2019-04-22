<template>
  <v-dialog v-model="dialog" max-width="480">
    <v-btn slot="activator" flat icon>
      <v-icon>
        contacts
      </v-icon>
    </v-btn>

    <v-card>
      <v-toolbar>
        <v-toolbar-title flat>
          Favorite
        </v-toolbar-title>
        <v-spacer />
        <v-btn icon flat @click="dialog = false">
          <v-icon>
            close
          </v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="text-xs-right">
        <add-contact />
      </v-card-text>
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
              {{ contact.acc }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
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
    contacts: [
      {
        name: 'Thuswonsa K',
        bank: 'Korbboon Bank Co, Ltd.',
        bankId: 1,
        acc: '325-9-71464-9'
      }
    ]
  }),
  methods: {
    selected(contact) {
      this.$emit('selected', contact)
      this.dialog = false
    }
  }
}
</script>
