<template>
  <v-container>

    <v-row justify="center" class="ma-6">
      <h1 class="text-h4">Origo Heilbrigðislausnir</h1>
    </v-row>

    <v-row justify="center" align-content="center" align="center" class="mt-8 ma-6">
      <v-img :src="require(`../assets/health-care.png`)" alt="Origo Health Care logo"
        contain
        class=""
        :max-height="500">
      </v-img>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
}
</script>
