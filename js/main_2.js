(function() {
  'use strict';

  //Components

  var likeComponent = Vue.extend({
    template: '<button>like</button>'
  })

  var vm = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    }
  })
})();