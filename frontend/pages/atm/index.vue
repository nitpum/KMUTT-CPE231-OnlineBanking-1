<template>
  <div>
    <v-container>
      <h1>พื้นที่ โฆษณาจ้า!</h1>
    </v-container>
    <v-bottom-sheet
      :hide-overlay="true"
      :value="true"
      :persistent="true"
      full-width
    >
      <v-spacer />
      <v-list>
        <v-list-tile>
          <v-spacer></v-spacer>
          <v-list-tile-action>
            <v-btn to="/atm/menu">
              NEXT
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  layout: 'atm'
}
</script>
