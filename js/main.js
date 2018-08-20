(function() {
  'use strict';

  //two wat data binding (to UI)

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [{
          title: 'task 1',
          isDone: false
        },
        {
          title: 'task 2',
          isDone: false
        },
        {
          title: 'task 3',
          isDone: true
        }
      ]
    },
    watch: {
      // todos: function() {
      // 	localStorage.setItem('todos', JSON.stringify(this.todos));
      // 	console.log('Data saved')
      // }
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true
      }
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        }
        // e.preventDefault();s
        this.todos.push(item)
        this.newItem = ''
      },
      deleteItem: function(index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1);
        }
      },
      purge: function(index) {
        if (!confirm('delete finished?')) {
          return;
        }
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        })
      }
    }
  })
})();