<template>
  <div class = "todo-item" v-bind:class = "{'is-complete':todo.Completed}">
      <p> 
          <input type="checkbox" v-on:change="markcomplete" v-bind:checked = "todo.Completed">
          <!-- v-on:dblclick="markcomplete" -->
          {{todo.Title}}
          <button @click="$emit('del-todo',todo.id)" class="del">X</button>
          </p>
          <!--  <input type="checkbox" v-on:change= "markcomplete"> -->
      
  <!-- </div> -->
</template>

<script>
export default {
    name : "Todoitem",
    props:  ["todo"],
    methods:{
        markcomplete(){
           this.todo.Completed = !this.todo.Completed 
        }
    }  

}
</script>

<style scoped>
.todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    cursor:pointer;
}
.is-complete{
    text-decoration: line-through;
}
.del{
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}

</style>>

