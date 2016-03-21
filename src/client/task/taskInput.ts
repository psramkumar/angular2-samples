import {Component, Inject, Input, Output, EventEmitter} from "angular2/core";
import {TaskService} from "./taskService";
import {Task} from "./task";

@Component({
    selector: "task-input",
    template: `    
        <div class="col-md-6">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="What task..." [(ngModel)]="task.title" #taskdom>
                <span class="input-group-btn">
                    <a class="btn btn-primary" (click)="savetask.emit(null)">ADD</a>
                </span>
            </div>
        </div>          
    `
})

export class TaskInput {

    @Input() task: Task;
    @Output() savetask = new EventEmitter<Task>();

    constructor(private _taskService: TaskService) {
    }

}