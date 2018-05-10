const state = {
    all: [
        {
            id:1,
            text:'hello',
            compl:false
        },
        {
            id:2,
            text:'good',
            compl:false            
        },
        {
            id:3,
            text:'cool',
            compl:false
        }
    ],
    currentFilter: 'ALL'
  }
  
  const mutations = {
    addTodo (state, todo) {
      state.all.push(todo)
    },
    close(state,id){
        state.all = state.all.map(todo => {
            if(id === todo.id) todo.compl = true
            return todo
        })
    },
    setFilter(state, filter) {
        state.currentFilter = filter
    }
  }
  export default {
    state,
    mutations
  }