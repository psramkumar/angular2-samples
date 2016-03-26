import {Observable} from "rxjs/Rx";

export class SpotifyService {

    searchArtists(searchTerm) {
        const url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
        const promise = $.getJSON(url);
        return Observable.fromPromise(promise);
    }

}