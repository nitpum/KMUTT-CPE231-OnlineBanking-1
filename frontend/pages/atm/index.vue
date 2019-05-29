<template>
  <div>
    <v-container>
      <h1>พื้นที่ โฆษณาจ้า!</h1>
    </v-container>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="cardNo"
          prepend-icon="mdi-credit-card"
          name="cardNo"
          label="CardNo"
          type="text"
        />
        <v-text-field
          v-model="pin"
          prepend-icon="lock"
          name="pin"
          label="PIN"
          type="password"
          @keyup.enter="signIn()"
        />
      </v-form>
    </v-card-text>
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
