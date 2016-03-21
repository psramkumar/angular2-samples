import {Component} from 'angular2/core'

import {UdemyService} from './udemy.service'
import {PersonService} from './person.service'

import {AutoGrowDirective} from './auto-grow.directive'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'
import {CardComponent} from './card.component'
import {ZippyComponent} from './zippy.component'
import {TreeViewComponent} from './tree-view.component'

@Component({
	selector:'udemy',
	templateUrl:'client/udemy/udemy.template.html',
	providers:[UdemyService,PersonService],
	directives:[
				AutoGrowDirective
				,FavoriteComponent
				,LikeComponent
				,VoterComponent
				,CardComponent
                ,ZippyComponent
                ,TreeViewComponent
	]
})

export class UdemyComponent { 
	title:string = "Angular2 Samples";	
	courses:string[];
	ratings:any[]=[{},{},{},{},{}];			
	imgUrl:string = "http://lorempixel.com/200/200/";	
	persons:any[];
    resmenus:any[];
    	
	constructor(private udemyService : UdemyService,private personService:PersonService){
		this.courses = udemyService.getCourses();
		this.persons = personService.getPersons();
        this.resmenus = udemyService.getResMenus();
	}	
	
	onImgClick($event){
		$event.stopPropagation();
		console.log("Image clicked",$event);
	}
	
	onDivClick($event){
		console.log("Div clicked",$event);
	}
		
	onRatingChange($event){
		console.log($event);
	}
	
	onLikeChange($event){
		console.log($event)
	}
	
	onVote($event){
		console.log($event);
	}

}
