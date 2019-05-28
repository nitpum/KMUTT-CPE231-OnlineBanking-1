<template>
  <v-container grid-list-lg>
    <v-card>
      <v-card-text>
        <v-layout row wrap justify-center>
          <v-flex v-for="member in members" :key="member" xs12 sm6 md5 lg4 xl3>
            <center>
              <v-img
                :src="`https://github.com/${member}.png`"
                class="profile"
                max-width="200px"
                aspect-ratio="1"
              />
              <h3 class="headline">
                <a
                  :href="`https://github.com/${member}`"
                  target="_blank"
                  style="text-decoration: none"
                >
                  @{{ member }}
                </a>
              </h3>
            </center>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style>
.profile {
  border-radius: 3px !important;
}
</style>

<script>
export default {
  data: () => ({
    members: ['GrimxMaster', 'nitpum', 'topty', 'yee2542', 'yes2023']
  })
}
</script>
