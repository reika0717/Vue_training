(function() {
	'use strict';

	//two wat data binding (to UI)

	var vm = new Vue({
		el: '#app',
		data: {
			newItem: '',
			todos: [
				'task 1',
				'task 2',
				'task 3'
			]
		},
		methods: {
			addItem: function() {
				// e.preventDefault();s
				this.todos.push(this.newItem)
				this.newItem=''
			},
			deleteItem: function(index) {
				if(confirm('are you sure?')) {
					this.todos.splice(index, 1);
				}
			}
		}
	})
})();