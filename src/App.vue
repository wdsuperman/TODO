<template>
  <div id="app">
    <Todo/>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'
export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  padding-top: 40px;
  background-color: #ECF0F1;
}
button{
  width: 40px;
  height: 40px;
}
svg{
  width: 30px;
  height: 30px;
}
</style>
