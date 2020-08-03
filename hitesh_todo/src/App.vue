<template>
  <div>
    
      <Todolist />
  </div>
 
</template>

<script>
 import Todolist from "./components/Todolist"
export default {
 
  name:"App",
  components:{
    Todolist
  }

}
</script>

<style>
body{
  background-color: rgb(66,66, 66);
  color: aliceblue;
}

</style>