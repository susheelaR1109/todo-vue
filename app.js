Vue.component('todo',{
    template: `
    <div class="col-md-8 offset-md-2">
                    <h2 class="text-center mt-5">
                        My Vue Todo App
                    </h2>
                    <div class="d-flex mt-3">
                        <input v-model="task" type="text" class="form-control rounded-4" placeholder="Enter Task">
                        <button @click="submitTask" class="btn btn-warning rounded-4 ms-2">Add</button>
                    </div>
                    <table class="table table-hover mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Task</th>
                                <th scope="col">Status</th>
                                <th scope="col"class="text-center"></th>
                                <th scope="col"class="text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(task, index) in tasks" :key="index">
                                <td>
                                    <span :class="{'finished':task.status === 'completed'}">
                                        {{task.name}}
                                    </span>
                                </td>
                                <td style="width: 120px;">
                                    <span @click="changeStatus(index)" style="cursor: pointer;" :class="{'text-danger': task.status === 'to-do', 'text-warning':task.status === 'in-progress', 'text-success':task.status === 'completed',}">
                                        {{firstCharUpper(task.status)}}
                                    </span>
                                </td>
                                <td>
                                    <div class="edit-mouse text-center" @click="editTask(index)">
                                        <span class="fa fa-pen"></span>
                                    </div>
                                </td>
                                <td>
                                    <div class="text-center" @click="deleteTask(index)">
                                        <span class="fa fa-trash"></span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    `,
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
            this.tasks.splice(index,1);
            this.edited=null

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

new Vue({
    el:'#app',
})