/* eslint-disable space-before-blocks */
<template>
  <div>
     <h1>dogs for adoption</h1>
     <b-table striped hover :items="dogs">

          <template v-slot:cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/pets/dogs/${data.index}`">{{ data.index }}</router-link >
      </template>
</b-table>

  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }

}
</script>

<style>

</style>
