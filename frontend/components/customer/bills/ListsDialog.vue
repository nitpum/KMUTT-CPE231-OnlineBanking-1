<template>
  <v-dialog v-model="dialog" width="400">
    <v-card>
      <v-card-title>
        <h3 class="headline">
          Bill payment
        </h3>
      </v-card-title>
      <v-expansion-panel class="elevation-0" :value="0">
        <v-expansion-panel-content v-for="(cat, i) in cat" :key="'cat-' + i">
          <template v-slot:header>
            <div>{{ cat.text }}</div>
          </template>
          <v-card>
            <v-card-text>
              <v-list two-line>
                <template
                  v-for="(bill, j) in bills.filter(
                    bill => bill.cat === cat.key
                  )"
                >
                  <v-list-tile
                    :key="`bill-${i}-${j}`"
                    @click="select(bill.ref1)"
                  >
                    <v-list-tile-content>
                      <v-list-tile-title>
                        {{ bill.name }}
                      </v-list-tile-title>
                      <v-list-tile-sub-title>
                        {{ bill.ref1 }}
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
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
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    cat: [
      {
        key: 'internet',
        text: 'Internet'
      },
      {
        key: 'telecom',
        text: 'Telecom Service'
      }
    ],
    bills: [
      {
        cat: 'internet',
        ref1: '293848585',
        name: 'Korbboon Internet'
      },
      {
        cat: 'internet',
        ref1: '294268585',
        name: 'Yee Fiber 2 U'
      },
      {
        cat: 'telecom',
        ref1: '293841635',
        name: 'Korbboon communication'
      }
    ]
  }),
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    select(ref1) {
      this.$emit('select', ref1)
      this.dialog = false
    }
  }
}
</script>
