const app = new Vue({
    el: '#vue_app',
    created: function() {
        console.log("Let's Go");
    },
    data: function() {
        return{
            get_title: '',
        }
    },
    methods: {
        show_get_title: function(){
            console.log(this.get_title);
        }
    },

});
