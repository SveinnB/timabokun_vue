<template>
  <v-app>
    <router-view/>
        <div class="fixed_left">
      <h3>Origo-HC Dev</h3>
      <p>Do not use in production</p>
    </div>
    <div class="fixed_right">
      <v-img :src="require(`./assets/origoBlack.png`)" alt="Origo logo"
        contain
        :max-height="150"
        :max-width="150">
      </v-img>
    </div>
  </v-app>
</template>

<style scoped>
.fixed_left{
  position: fixed;
  bottom: 0;
  left: 20px;
}
.fixed_right{
  position: fixed;
  bottom: 10px;
  right: 20px;
}
</style>
