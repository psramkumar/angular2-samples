import {Component,Input} from 'angular2/core'

@Component({
    selector:'zippy',
    templateUrl: 'client/udemy/zippy.template.html'    
})

export class ZippyComponent{
    isExpanded:boolean;
    @Input('z-title') title:string;
    
    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}