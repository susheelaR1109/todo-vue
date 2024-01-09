new Vue({
    el:'#app',
    data: function(){
        return {
            tasks: [
                {
                    name:'Buy banana',
                    status:'to-do'
                },
                {
                    name:'Eat lunch',
                    status:'in-progress'
                }
            ]
        }
    }
})