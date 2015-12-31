//import {Component, View } from 'angular2/core';
import {Component,Inject} from 'angular2/core';
import {TaskService} from './taskService'
@Component({
    selector: 'task-input',


//})
//@View({ 

    template: `    
        <div class="col-md-6">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="What task..." (keypress)="enterTask($event,task)" #task>
                <span class="input-group-btn">
                    <a class="btn btn-primary" (click)="showLogInput($event,task)">ADD</a>
                </span>
            </div>
        </div>          
    `
})

export class TaskInput {
    public _taskService:TaskService;
    
    constructor(@Inject(TaskService) taskService:TaskService){
        this._taskService = taskService;
        //console.log(this._taskService);
    }
    
    showLogInput(e:Event,task:HTMLInputElement){
        this._taskService.addTask(task.value);
        task.value = '';
        //console.log(e,this._taskService.tasks);
    }
    
    enterTask(e:KeyboardEvent,task:HTMLInputElement){
        if(e.keyCode === 13){
            this.showLogInput(e,task);
        }
    }
}