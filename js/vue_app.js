const app = new Vue({
    el: '#vue_app',
    created: function() {
        console.log("Let's Go");
    },
    data: function() {
        return{
            get_line: '',
            get_list: [
                {
                    checked: false,
                    line: 'test3',
                },
                {
                    checked: false,
                    line: 'test2',
                },
                {
                    checked: false,
                    line: 'test1',
                },
            ]
        }
    },
    methods: {
        show_get_line: function(){
            console.log(this.get_line);
        },
        add_data: function(){
            let data= {
                checked: false,
                line: this.get_line,
            };

            this.get_list.push(data);
            this.get_line = '';
        }
    },

});
