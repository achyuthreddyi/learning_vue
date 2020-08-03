<template>
  <form @submit.prevent="addTodo()" class="c0l-12 col-lg-6">
      <input v-model = "newTodo" type="text" placeholder="Enter todo!!" class="form-control">
  </form>
</template>

<script>
export default {
    data(){
        return{
            newTodo:""
        }

    }
    ,methods:{
        addTodo(){
            if(this.newTodo.length > 1){
                this.$emit("on-addTodo",this.newTodo)
            }
            this.newTodo = ''
        }
    }

}
</script>

<style>

</style>