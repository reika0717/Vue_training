(function() {
  'use strict';


  //Components

  var likeComponent = Vue.extend({
    // props: ['message'],
    props: {
      message: {
        type: String,
        default: 'Like'
      }
    },
    data: function() {
      return {
        count: 0
      }
    },
    template: '<button @click="countup">{{ message }} {{ count }}</button>',
    methods: {
      'countup': function() {
        this.count++;
      }
    }
  })

  var app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    }
  });

})();