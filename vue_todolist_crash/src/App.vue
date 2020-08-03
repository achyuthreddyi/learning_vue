<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Todos v-bind:todos = "todos" v-on:del-todo="deltodo" />
        <!-- <Todos v-bind:todos = "todos" @del-todo="deltodo($event)" /> -->

    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    Todos
  },
  data(){
    return {
      todos:[
         {
          Id: 1,
          Title: "selected either the",
          Completed: true
        },
        {
          Id: 2,
          Title: "Who will be easy for those services",
          Completed: false
        },
        {
          Id: 3,
          Title: "I fly less",
          Completed :false
        },
        {
          Id: 4,
          Title: "and on time",
          Completed: true
        }
      ]
    }
  },
  methods:{
    deltodo(id){      
      console.log('id',id);
      this.todos = this.todos.filter(todo => todo.id != undefined && todo.id !== id);
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: center;
}

body{
  font-family: Arial , Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
