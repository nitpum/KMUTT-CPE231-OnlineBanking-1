<template>
  <v-container>
    <search-box :filter="fn => (filter = fn)" />
    <v-layout row wrap>
      <v-flex
        v-for="(staff, i) in filter(staffs, ['name'])"
        :key="i"
        md4
        sm12
        pr-2
        mb-1
      >
        <card
          :name="staff.name"
          :gender="staff.gender"
          :role="staff.role"
          :hide-more-info="true"
          @onMoreInfo="moreinfo"
        ></card>
      </v-flex>
    </v-layout>
    <Dialog v-model="dialog" :data="staff"></Dialog>
  </v-container>
</template>

<script>
import Card from '@/components/staff/Card'
import Dialog from '@/components/core/staff/Dialog'
import SearchBox from '@/components/core/SearchBox'

export default {
  layout: 'manager',
  components: {
    Card,
    Dialog,
    SearchBox
  },
  data: () => ({
    dialog: false,
    createDialog: false,
    staffs: [],
    filter: () => {},
    staff: {
      name: {
        firstName: '',
        lastName: ''
      },
      gender: 'Male',
      citizenId: '',
      address: '',
      zipcode: '',
      birthDate: null,
      role: '',
      password: ''
    }
  }),
  mounted() {
    this.fetch()
  },
  methods: {
    moreinfo: function(staff) {
      this.editable = false
      this.dialog = true
      this.staff = staff
    },
    fetch() {
      this.$axios.get('/staff/query/branch/me').then(({ data }) => {
        this.staffs = data.staffs.map(({ name, gender }) => ({
          name: [name.firstName, name.lastName].join(' ')
        }))
      })
    }
  }
}
</script>
