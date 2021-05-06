<template>
  <v-container class="pa-7">

    <v-row justify="center" class="mt-8" v-if="loading">
      <v-progress-circular class="ma-3" indeterminate :size="80"></v-progress-circular>
    </v-row>

    <v-row align="bottom" justify="center" v-if="error">
      <v-alert class="ma-3"
        border="bottom"
        colored-border
        width="100%"
        type="error"
        elevation="2">
        {{ errorMessage }}
      </v-alert>
    </v-row>

    <v-row justify="center">
      <canvas id="canvas" ref="canvas" ></canvas>
    </v-row>

  </v-container>
</template>

<script>
import bwipjs from 'bwip-js';

export default {
  name: "Barcode",
  props :{
    code: String,
    format: String,
  },
  data() {
    return {
      error: false,
      errorMessage: null,
      loading: true,
      opts: {
        bcid: this.format,
        text: this.code,
        scaleX: 12,
        scaley: 12,
        includetext: true,
        textxalign:  'center',
      }
    };
  },
  mounted(){
    console.log(this.code);
    this.RenderBarcode(this.$refs.canvas, this.opts);
    this.loading = false;
  },
  methods: {
    RenderBarcode(canvas, opts){
      try {
        bwipjs.toCanvas(canvas, opts);
        this.error = false;
        this.errorMessage = null;
      }
      catch (err) {
        this.error = true;
        this.errorMessage = err;
      }
    },
  }
}
</script>

<style scoped>
#canvas{
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 600px;
  object-fit: contain;
}
</style>
