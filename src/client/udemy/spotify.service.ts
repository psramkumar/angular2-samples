import {Observable} from "rxjs/Rx";

export class SpotifyService {

    searchArtists(searchTerm) {
        let promiseObj: Promise<JQueryXHR>;
        const url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
        promiseObj = new Promise(function() {
            return $.getJSON(url);
        });
        return Observable.fromPromise(promiseObj);
    }

}