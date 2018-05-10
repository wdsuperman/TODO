<template>
  <div class="todo">
    <Header/>
    <TodoList/>
    <Form/>
    <Actions/>
  </div>
</template>

<script>
import Header from "./Header"
import TodoList from "./TodoList"
import Form from "./Form"
import Actions from "./Actions"
export default {
  name: 'Todo',
  components:{
    Header,
    TodoList,
    Form,
    Actions
  }
}
</script>

<style scoped>
.todo{
  width: 40%;
  height:85%;
  background-color: #33CCCC;
  margin: 0 auto;
  box-shadow: 5px 10px 20px 2px #2980B9;
}
</style>
