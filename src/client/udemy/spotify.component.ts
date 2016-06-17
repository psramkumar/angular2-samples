/// <reference path="../typings/tsd.d.ts" />
import {Component, ElementRef, Input, Output} from "@angular/core";
import {ControlGroup, FormBuilder, Validators} from "@angular/common";
import {Observable} from "rxjs/Observable";


import {SpotifyService} from "./spotify.service";

@Component({
    selector: "spotify",
    providers: [SpotifyService],
       template: `
           <input id="search1" type="text" class="form-control" (keyup)="onkeyup($event)" />
       `
    templateUrl: "client/udemy/spotify.component.html"
})
export class SpotifyComponent {
    private _debounced: any;
    constructor(el: ElementRef) {
        this._debounced = _.debounce((text) => {
                let url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
                $.getJSON(url, (artists) => {
                    console.log(artists);
            });
        }, 400);
    }
    onkeyup(e) {
        let text = e.target.value;
        if (text.length < 3) return;
        this._debounced(text);
    }


    searchForm: ControlGroup;
    artists: any = [];
    // constructor(elementRef: ElementRef, private _spotifyService: SpotifyService) {
    //     const keyups = Observable.fromEvent(elementRef.nativeElement, "keyup")
    //         .map((e: Event) => (<HTMLInputElement>e.target).value)
    //         .filter(value => value.length >= 3)
    //         .debounceTime(400)
    //         .distinctUntilChanged()
    //         .flatMap(this._spotifyService.searchArtists)
    //         .map(data => {
    //             console.log(data);
    //             return data.artists;
    //         })
    //         ;

    //     const subscription = keyups.subscribe(data => this.artists = data.items);
    //     // subscription.unsubscribe();
    // }

    constructor(fb: FormBuilder, private _spotifyService: SpotifyService) {
        this.searchForm = fb.group({
            searchArtist: []
        });

        const searchArtist = this.searchForm.find("searchArtist");
        searchArtist
            .valueChanges
            .debounceTime(400)
            .map(value => (<string>value).trim())
            .filter(value => (<string>value).length >= 3)
            .map(str => (<string>str).replace(" ", "-"))
            .flatMap(this._spotifyService.searchArtists)
            .map(data => {
                console.log(data);
                return data["artists"];
            })
            .subscribe(data => this.artists = data.items);
        ;
/*
        const startDates = [];
        const startDate = new Date();

        for (let day = -2; day <= 2; day++) {
            let date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day
            );
            startDates.push(date);
        }

        Observable
            .fromArray(startDates)
            .map(date => {
                console.log("Getting deals for date", date);
                return [date];
            })
            .subscribe(x => console.log(x))
        ;

        Observable
            .of(2)
            .subscribe(x => console.log(x))
        ;

        Observable
            .of(2, 3, 4)
            .subscribe(x => console.log(x))
        ;

        Observable
            .of({ "name": "nirmal" })
            .subscribe(x => console.log(x))
        ;

        Observable
            .of([{ "name": "nirmal" }, 1, 2])
            .subscribe(x => console.log(x))
        ;

        Observable
            .empty() // no action
            .subscribe(x => console.log(x))
        ;

        Observable
            .range(5, 7)// (start, length)
            .subscribe(x => console.log(x))
        ;

        Observable
            .fromArray([7, 8, 9])
            .subscribe(x => console.log(x))
        ;

        Observable
            .interval(2000)
            .flatMap(x => {
                console.log("getting information in every 2000 milliseconds..");
                return Observable.fromArray([1, x]);
            })
            .subscribe(x => console.log(x))
        ;


        const userStream = Observable.of(
            { "userid": "001", "username": "nirmal" }
        ).delay(2000);

        const tweetStream = Observable.of(
            ["tweet1", "tweet2"]
        ).delay(1500);

        Observable
            .forkJoin(userStream, tweetStream)
            .map(joined => {
                return new Object({
                    user: joined[0],
                    tweet: joined[1]
                });
            })
            .subscribe(x => console.log(x))
        ;
        
*/
/*
        Observable
            .fromArray([1, 2, 3])
            .flatMap(data => {
                if (data === 2) {
                    return Observable.throw(new Error("Its test error"));
                } else if(data === 3) {
                    return Observable.of({"delay": 3000}).delay(3000);
                } else {
                    return Observable.fromArray([5, 6, 7]);
                }
            })
            .catch(err => {
                return Observable.of({ "data": "dummy" });
            })
            .timeout(1500)
            .subscribe(
                x => console.log(x),
                error => console.log("error", error)
            )
        ;*/
    }
}