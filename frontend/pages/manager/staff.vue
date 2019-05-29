<template>
  <v-container>
    <v-text-field
      prepend-inner-icon="search"
      label="Search"
      placeholder="Search"
      solo
    ></v-text-field>
    <v-layout row wrap>
      <v-flex v-for="(staff, i) in staffs" :key="i" md4 sm12 pr-2 mb-1>
        <card @onMoreInfo="moreinfo" @onEdit="edit"></card>
      </v-flex>
    </v-layout>
    <Dialog v-model="dialog" :staff="staff"></Dialog>
  </v-container>
</template>

<script>
import Card from '@/components/staff/Card'
import Dialog from '@/components/core/staff/Dialog'

export default {
  layout: 'manager',
  components: {
    Card,
    Dialog
  },
  data: () => ({
    dialog: false,
    createDialog: false,
    staffs: [{}, {}, {}],
    staff: null
  }),
  methods: {
    moreinfo: function(staff) {
      this.editable = false
      this.dialog = true
      this.staff = staff
    }
  }
}
</script>
