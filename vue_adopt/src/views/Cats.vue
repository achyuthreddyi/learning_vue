/* eslint-disable indent */
<template>
  <div>
  <h1> Cats for adoption </h1>
      <b-table striped hover :items="cats">

          <template v-slot:cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <!-- <router-link :to="`/pets/cats/${ninudata.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">{{ data.value }}</router-link > -->
         <router-link :to="`/pets/cats/${data.index}`">{{ data.value }}</router-link >
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
      'cats'
    ])
  }

}
</script>

<style>

</style>
