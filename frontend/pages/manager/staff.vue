<template>
  <v-container>
    <v-text-field
      prepend-inner-icon="search"
      label="Search"
      placeholder="Search"
      solo
    ></v-text-field>
    <v-btn color="accent" fab fixed bottom right>
      <v-icon>add</v-icon>
    </v-btn>
    <v-layout row wrap>
      <v-flex md4 sm12 pr-1 mb-1>
        <card
          :show-edit-btn="true"
          @onMoreInfo="moreinfo"
          @onEdit="edit"
        ></card>
      </v-flex>
    </v-layout>
    <Dialog v-model="dialog" :editable="editable"></Dialog>
  </v-container>
</template>

<script>
import Card from '@/components/staff/Card'
import Dialog from '@/components/staff/Dialog'

export default {
  layout: 'manager',
  components: {
    Card,
    Dialog
  },
  data: () => ({
    dialog: false,
    editable: false,
    staffs: []
  }),
  methods: {
    moreinfo: function() {
      this.editable = false
      this.dialog = true
    },
    edit: function() {
      this.editable = true
      this.dialog = true
    }
  }
}
</script>
