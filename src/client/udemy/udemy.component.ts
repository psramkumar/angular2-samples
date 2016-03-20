import {Component} from 'angular2/core'

import {UdemyService} from './udemy.service'
import {PersonService} from './person.service'

import {AutoGrowDirective} from './auto-grow.directive'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'
import {CardComponent} from './card.component'

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
	]
})

export class UdemyComponent { 
	title:string = "Udemy course";	
	courses:string[];
	ratings:any[]=[{},{},{},{},{}];
			
	imgUrl:string = "http://lorempixel.com/400/200/";
	
	persons:any[];
	
	constructor(private udemyService : UdemyService,private personService:PersonService){
		this.courses = udemyService.getCourses();
		this.persons = personService.getPersons();
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
