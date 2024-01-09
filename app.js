new Vue({
    el:'#app',
    data: function(){
        return {
            task:'',
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
    },
    methods: {
        submitTask(){
            // console.log(this.task)
            if(this.task.length === 0) return;
            this.tasks.push({
                    name: this.task,
                    status: 'to-do'
                });
            this.task=''
        },
    }
})