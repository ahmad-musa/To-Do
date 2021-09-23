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
                    checked: true,
                    line: 'test to delete',
                },
                {
                    checked: false,
                    line: 'select to delete',
                },
                {
                    checked: false,
                    line: 'test case1',
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

            //condition check for empty string

            if(this.get_line){ 
                this.get_list.push(data);
                this.get_line = '';
            }
        },

        delete_data: function(index){
            console.log({list: this.get_list,index , line: this.get_list[index].line});
            this.get_list.splice(index,1);
        }
    },

});
