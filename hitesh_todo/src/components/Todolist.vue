<template>
  <div class="container">
      <div class="row">
          <div class="col-12">
              <p class="display-3">
                  Vue Crash Course                  
              </p>              
          </div>
      </div>
      <div class="row">
          <!-- <p>Add create form</p> -->
          <Addtodo @on-addTodo = "addTodo($event)" />
      </div>
      <div class="row">
          <div class="col-12 col-lr-6">
              <ul class="list-group">
                  <Todo v-for="(todo,index) in todos" 
                  :key="index"
                  :todoString = "todo.todostring" 
                  :completed = "todo.completed"
                  @on-delete="deleteTodo(todo)"
                  @on-toggle="toggleTodo(todo)"
                  @on-edit = "editTodo(todo,$event)"
                  />
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import Todo from './Todo.vue'
import Addtodo from './CreateTodo'

export default {
    
    name :"Todolist",
    components:{
        Todo,
        Addtodo
    },
    data(){
        return {
            todos:[
                {
                    todostring:"angular course",
                    completed:true
                },
                {
                    todostring:"vue course",
                    completed:false
                },
                {
                    todostring:"react course",
                    completed:true
                },
                {
                    todostring:"swimming",
                    completed:false
                }
            ]
        }
    },
    methods:{
        addTodo(newTodo){
            this.todos.push({
                todostring:newTodo,
                completed:false
            })
        },
        toggleTodo(todo){
            todo.completed  = !todo.completed
        },
        editTodo(todo , newTodoString){
            console.log(newTodoString)
            todo.todostring = newTodoString
        },
        deleteTodo(dtodo){
            this.todos = this.todos.filter(todo => todo.todostring != dtodo.todostring)

        }
    }
    

}
</script>

<style>

</style>