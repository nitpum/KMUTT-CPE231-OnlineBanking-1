<template>
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex>
        <overview-info
          :overviews="overviews"
          :data="data"
          title="Branch Overview"
        />
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Branch List
            </h3>
            <v-spacer />
            <v-btn color="primary" class="my-0" @click="createDialog = true">
              Create Branch
            </v-btn>
          </v-card-title>
          <v-divider />
          <branch-list :items="branchs" />
        </v-card>
      </v-flex>
    </v-layout>
    <create-dialog v-model="createDialog" @onSubmit="createBranch" />
  </v-container>
</template>

<script>
import OverviewInfo from '@/components/core/overview/Info'
import BranchList from '@/components/admin/BranchList'
import CreateDialog from '@/components/admin/branch/CreateDialog'

export default {
  layout: 'admin',
  components: {
    OverviewInfo,
    BranchList,
    CreateDialog
  },
  data: () => ({
    from: undefined,
    to: undefined,
    createDialog: false,
    data: {
      totalBranch: 120,
      minStaff: 10,
      maxStaff: 40,
      avgStaff: 20,
      mostTransaction: 300,
      avgTranPStaff: 5
    },
    branch: {},
    branchs: [],
    overviews: [
      [
        {
          key: 'totalBranch',
          label: 'Total Branch'
        },
        {
          key: 'minStaff',
          label: 'Minimum Staff'
        }
      ],
      [
        {
          key: 'maxStaff',
          label: 'Maximum Staff'
        },
        {
          key: 'avgStaff',
          label: 'Average Staff',
          place: 2
        }
      ]
      // [
      //   {
      //     key: 'mostTransaction',
      //     label: 'Most Transaction',
      //     suffix: '(BangMod)'
      //   },
      //   {
      //     key: 'avgTranPStaff',
      //     label: 'Average Transaction / Staff'
      //   }
      // ]
    ]
  }),
  created() {
    this.fetch()
  },
  methods: {
    createBranch() {
      this.createDialog = false
      this.fetch()
    },
    fetch() {
      this.$axios.get('/branch/overview').then(({ data }) => {
        this.data = data
      })
      this.$axios.get('/branch/lists').then(res => {
        this.branchs = res.data
      })
    }
  }
}
</script>
