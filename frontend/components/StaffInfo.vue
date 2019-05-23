<template>
  <v-list two-line class="mt-2">
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title class="title">
          {{ name }}
        </v-list-tile-title>
        <v-list-tile-sub-title>No. {{ no }}</v-list-tile-sub-title>
        <v-list-tile-sub-title>Branch: {{ branch }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    name: 'Somsuk Sukjai',
    no: '001',
    branch: 'Bangmod (001)'
  })
}
</script>
