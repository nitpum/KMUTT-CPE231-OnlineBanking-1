<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <overview-info :overviews="overviews" :data="data" />
      </v-flex>

      <v-flex xs12 sm6>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Service Usage
            </h3>
          </v-card-title>
          <v-divider />
          <heatmap v-if="showHeatmap" />
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Top Services
            </h3>
            <v-spacer />
          </v-card-title>
          <v-divider />
          <v-card-text>
            <p style="text-align:left;">
              Bill
              <span style="float:right;">
                10000
              </span>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">
              Service List
            </h3>
            <v-spacer />
            <v-btn color="primary" class="my-0" @click="openCreateDialog"
              >CREATE SERVICE</v-btn
            >
          </v-card-title>
          <v-divider />
          <list :items="list" @onItemClick="openDialog" />
        </v-card>
      </v-flex>
    </v-layout>
    <Dialog v-model="createDialog" />
    <Dialog v-model="editDialog" :data="item" />
  </v-container>
</template>

<script>
import OverviewInfo from '@/components/core/overview/Info'
import Heatmap from '@/components/admin/org/Heatmap'
import Dialog from '@/components/admin/service/Dialog'
import List from '@/components/admin/service/Lists'

export default {
  layout: 'admin',
  components: {
    OverviewInfo,
    Heatmap,
    Dialog,
    List
  },
  data: () => ({
    showHeatmap: false,
    from: undefined,
    to: undefined,
    createDialog: false,
    editDialog: false,
    data: {
      totalService: 850,
      avgSPO: 5,
      maxService: 20,
      todayService: 800,
      thisMonthService: 421561
    },
    item: {
      _id: '',
      organization: {
        _id: '',
        bankAccount: '',
        bankSwift: '',
        name: '',
        type: ''
      },
      detail: '',
      fee: 0,
      type: {
        _id: '',
        name: '',
        type: ''
      }
    },
    list: [],
    overviews: [
      [
        {
          key: 'totalService',
          label: 'Total Service'
        },
        {
          key: 'avgSPO',
          label: 'Average Service / Organization'
        },
        {
          key: 'maxService',
          label: 'Max Service'
        }
      ],
      [
        {
          key: 'todayService',
          label: 'Today Service Usage'
        },
        {
          key: 'thisMonthService',
          label: 'This Month Service Usage'
        }
      ]
    ]
  }),
  mounted() {
    this.showHeatmap = true
    this.fetch()
  },
  methods: {
    openCreateDialog() {
      this.createDialog = true
      this.editDialog = false
    },
    openDialog(item) {
      this.createDialog = false
      this.editDialog = true
      this.item = { ...item }
    },
    fetch() {
      this.$axios.get('/service-reference/query').then(res => {
        this.list = []
        res.data.forEach(item => {
          this.list.push({
            _id: item._id,
            organization: item.organizationId,
            detail: item.detail,
            fee: item.fee,
            type: item.typeId
          })
        })
      })
    }
  }
}
</script>
