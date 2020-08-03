<template>
  <div>
      <!-- {{ $route.params.species }} <br>
      {{ $route.params.id }}<br> -->
      <!-- <h1>{{ animal.breed }} ({{ this.$route.params.species }})</h1>
      {{ animal.age }} -->

      <b-table striped hover :items="arrat"></b-table>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      animal: {},
      arrat: []
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    //   this.cats
    //   this['cats'] the below is similar to saying this

    const animal = this[this.$route.params.species][this.$route.params.id]
    console.log('animal', animal)
    this.arrat = [...this.arrat, animal]
    this.animal = animal
  }

}
</script>

<style>

</style>
