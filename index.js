var app = new Vue({
    el: '#app',
    data: {
        message: 'Hi love!' 
    },
    methods: { 
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});