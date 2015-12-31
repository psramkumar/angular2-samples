import {Component} from 'angular2/core';
import {TaskInput} from './taskInput';
import {TaskList} from './taskList';
@Component({
    selector: 'task',
    directives:[TaskInput,TaskList],
    templateUrl: 'client/task/task.html',
    styleUrls:['client/task/task.css']
})

export class TaskComponent { }
