<template>
    <div class="top">
        <div @click="close(todo.id)" :class="{active : todo.compl}" :key="todo.id" v-for="todo in filteredTodos">
            {{ todo.text }}
        </div>
    </div>
</template>

<script>
import { filterTodos } from '../utils'
export default {
    name:'TodoList',
    methods:{
        close(id){
            this.$store.commit('close', id)
        }
    },
    computed: {
      todos() {
        return this.$store.state.todo.all 
    },
    currentFilter(){
        return this.$store.state.todo.currentFilter
    },
    filteredTodos(){
        return filterTodos(this.todos, this.currentFilter)
    }
}
}
</script>

<style>
.top{
    overflow: auto;
    height: 100px;
    margin-top: 20%;
}
.active{
    color: #ccc;
    text-decoration: line-through;
}
</style>
