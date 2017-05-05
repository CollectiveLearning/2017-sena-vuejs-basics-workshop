<template>
    <div class="container">
        <h1>Users</h1>
        <div class="panel panel-primary">
            <!-- Default panel contents -->
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-2 text-right">Name:</div>
                    <div class="col-md-3"><input type="text" v-model="student.name"></div>
                    <div class="col-md-2 text-right">Last Name:</div>
                    <div class="col-md-3"><input type="text" v-model="student.last_name"></div>
                    <div class="col-md-2">
                        <button type="button" class="btn btn-default btn-sm" v-on:click="create">
                            <span class="glyphicon glyphicon-user">Add </span>
                        </button>
                    </div>
                </div>      </div>
        </div>

        <div class="container-stripped">
            <!--Header-->
            <div class="row">
                <div class="col-md-3">
                    ID
                </div>
                <div class="col-md-3">
                    NAME
                </div>
                <div class="col-md-3">
                    LAST NAME
                </div>
                <div class="col-md-3">
                    ACTIONS
                </div>
            </div>

            <!--List-->
            <div class="row" v-for="(student, index) in students">
                <div class="col-md-3">
                    {{ index }}
                </div>
                <div v-if="!students[index].edit" class="col-md-3">
                    {{ student.name }}
                </div>
                <div v-else class="col-md-3">
                    <input type="text" v-model="studentEdit.name">
                </div>

                <div v-show="!students[index].edit" class="col-md-3">
                    {{ student.last_name }}
                </div>
                <div v-show="students[index].edit"  class="col-md-3">
                    <input type="text" v-model="studentEdit.last_name">
                </div>

                <div class="col-md-3">
                    <button type="button" class="btn btn-danger" v-on:click="remove(index)">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                    <button type="button" class="btn btn-default" v-on:click="edit(index)" v-show="!students[index].edit">
                        <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                    <button type="button" class="btn btn-primary" v-on:click="editSave(index)" v-show="students[index].edit">
                        <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                student: {name: '', last_name: '', edit: false},
                studentEdit: {name: '', last_name: '', edit: false},
                students: [
                    {name: 'Yonatan', last_name: 'Valencia', edit: false},
                    {name: 'Juanes', last_name: 'Celosa', edit: false},
                    {name: 'Andres', last_name: 'Vizca', edit: false}
                ]
            }

        },
        methods: {
            create: function(){
                this.students.push(this.student);
                this.student = {name: '', last_name: ''};
            },
            remove: function(index){
                this.students.splice(index, 1);
            },
            edit: function(index){
                // only one register are edited at same time
                this.students.forEach(function(student) {
                    student.edit = false;
                });
                this.students[index].edit = true;
                this.studentEdit = this.students[index];
            },
            editSave: function(index) {
                console.log(index);
                this.students[index] = {name: this.studentEdit.name, last_name:this.studentEdit.last_name, edit:false}
                this.studentEdit = {name: '', last_name: '', edit: false};
                console.log(this.studentEdit);

            }

        }
    }
</script>

<style>
    /*Alternating Row Colors in Bootstrap 3 - No Table*/
    .container-stripped {
        width:98%;
        margin:0 auto;
    }

    .container-stripped > .row {
        line-height:24pt;
        border: solid 1px #337ab7;
    }

    div.container-stripped > div:nth-of-type(even) {
        background: #e0e0e0;
    }

    div.container-stripped > div:nth-of-type(1) {
        background: #337ab7;
        color: white;
    }
</style>
