<template>
  <v-container>
    <Barcode :code="$route.params.code" format="code128"/>
  </v-container>
</template>

<script>
import Barcode from '@/components/Barcode.vue'

export default {
  name: "BarcodePage",
  components: {
    Barcode
  },
}
</script>
