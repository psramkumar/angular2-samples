export class TaskService {
    tasks: string[] = [
        'eat',
        'play',
        'sleep'        
    ];
    
    addTask(task:string){
        if(!task || 0 === task.length) return false;
        this.tasks.push(task);
    }
}