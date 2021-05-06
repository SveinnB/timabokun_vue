<template>
  <v-container>
    <Barcode :code="$route.params.code" format="qrcode"/>
  </v-container>
</template>

<script>
import Barcode from '@/components/Barcode.vue'

export default {
  name: "QrPage",
  components: {
    Barcode
  },
}
</script>
