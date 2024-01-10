new Vue({
    el:'#app',
    data: function(){
        return {
            task:'',
            edited:null,
            availableStatus: ['to-do','in-progress','completed'],
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
            console.log('submitTask: ',this.tasks)
            console.log("this.task: ", this.task)
            console.log("this.edited: ", this.edited)
            if(this.task.length === 0) return;
            if(this.edited === null) {
                this.tasks.push({
                    name: this.task,
                    status: 'to-do'
                });
            } else{
                this.tasks[this.edited].name = this.task;
            }
            this.task=''
        },
        deleteTask(index) {
            console.log('deleteTask before: ',this.tasks)
            this.tasks.splice(index,1);
            this.edited=null
            console.log('deleteTask after: ',this.tasks)

        },
        editTask(index){
            this.task = this.tasks[index].name;
            this.edited = index
        },
        changeStatus(index){
            let newIndex = this.availableStatus.indexOf(this.tasks[index].status);
            if(++newIndex > 2) newIndex=0;
            this.tasks[index].status = this.availableStatus[newIndex];
        },
        firstCharUpper(str){
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    }
})