import {Component, Input, ViewEncapsulation, Inject} from 'angular2/core'
import {TaskInput} from './taskInput';
import {TaskList} from './taskList';
import {TaskService} from './taskService';
import {Task} from './task';

@Component({
    selector: 'task',
    directives:[TaskInput,TaskList],
    templateUrl: 'client/task/task.html',
    styleUrls:['client/task/task.css']
})

export class TaskComponent { 
	private _tasks: Task[];
 	task : Task = {
        title: "",
	       completed: false,
	        description:  "",
        created_at: new Date(),
	       updated_at: new Date()
    };

	constructor(private _taskService:TaskService){
	}

	get tasks() {
	    return this._tasks || this.getTasks()
	}

	private getTasks() {
	    this._tasks = [];

	    this._taskService.getTasks()
	      //.then(contacts => this._contacts = contacts);
	        .subscribe(tasks => this._tasks = tasks.json());
	    return this._tasks;
	}	

	closetask(e: Event, task: Task) {
       	var index = this._tasks.indexOf(task);
    	this._tasks.splice(index,1);
	}

   	saveTask(e:Event){
/*
        var taskObj: Task = { 
            title : task.value,
            completed: false,
            description: "",
            created_at: new Date(),
            updated_at: new Date()    
        };
*/

		if (this.task.hasOwnProperty('_id')){
			//this._tasks
		}else{
		     this._taskService.addTask(this.task)
		          //.map(res => res.json())
            .subscribe(res => this._tasks = res.data);;
		     //.map(res => res.json())
                //    .subscribe((res:Person) => this.postResponse = res);
            //}
		}

       	this.task.title = '';
        //console.log(e,this._taskService.tasks);
    }
    
    enterTask(e:KeyboardEvent){
        if(e.keyCode === 13){
            this.saveTask(e);
        }
    }	
}
