import {Component,Inject} from 'angular2/core';
import {CORE_DIRECTIVES, COMMON_DIRECTIVES, FORM_BINDINGS, COMMON_PIPES, FORM_DIRECTIVES} from 'angular2/common';
import {TaskService} from './taskService';

@Component({
    selector: 'task-list', 
    directives:[CORE_DIRECTIVES],
    template: `
        <div class="col-md-8">
            <div *ngFor="#task of _taskService.tasks;#i = index" class="alert alert-info alert-dismissible" role="alert">
                <button type="button" class="close" aria-label="Close" (click)="closeTask(task)"><span aria-hidden="true">&times;</span></button>
                {{task}}
            </div>
        </div>
    `
})

export class TaskList {
    public _taskService:TaskService;
    
    constructor(@Inject(TaskService) taskService:TaskService){
        this._taskService = taskService;
    }
    
    closeTask(task:string){
        var index = this._taskService.tasks.indexOf(task);
        this._taskService.tasks.splice(index,1);
    }
}
