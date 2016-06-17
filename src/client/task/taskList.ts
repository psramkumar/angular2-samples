import {Component, Input, Output, EventEmitter} from "@angular/core";
import {CORE_DIRECTIVES, COMMON_DIRECTIVES, FORM_BINDINGS, COMMON_PIPES, FORM_DIRECTIVES} from "@angular/common";
import {Task} from "./task";

@Component({
    selector: "task-list",
    directives: [CORE_DIRECTIVES],
    template: `
        <div class="col-md-8">
            <div *ngFor="#task of tasks;#i = index" [class.alert-info]="selected != task" [class.alert-success]="selected == task" class="alert alert-dismissible" role="alert" (click)="selectedChange.next(task)">
                <button type="button" class="close" aria-label="Close" (click)="closetask.next($event,task)"><span aria-hidden="true">&times;</span></button>
                {{task.title}}
            </div>
        </div>
    `
})

export class TaskList {
    @Input() tasks: Task[];
    @Input() selected: Task;

    @Output() selectedChange: EventEmitter<Task> = new EventEmitter();
    @Output() closetask: EventEmitter<Task> = new EventEmitter();
}
