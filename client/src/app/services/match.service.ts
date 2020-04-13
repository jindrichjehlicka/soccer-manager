import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Match } from "../models/match";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json",
    mode: "no-cors",
  }),
};
@Injectable({
  providedIn: "root",
})
export class MatchService {
  url = "http://localhost:8181/games/";

  constructor(private http: HttpClient) {}

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.url);
  }

  getMatch(id: number): Observable<Match> {
    const url = `${this.url}${id}`;
    return this.http.get<Match>(url);
  }

  addMatch(Match: Match): Observable<any> {
    return this.http.post<Match>(this.url, Match, httpOptions);
  }

  deleteMatch(Match: Match): Observable<any> {
    const url = `${this.url}${Match.id}`;
    return this.http.delete<Match>(url, httpOptions);
  }

  updateMatch(Match: Match): Observable<any> {
    const url = `${this.url}`;
    return this.http.put<Match>(url, Match, httpOptions);
  }
}
