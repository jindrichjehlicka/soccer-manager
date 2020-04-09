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
  url = "http://localhost:8181/";

  constructor(private http: HttpClient) {}

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.url}games`);
  }

  // deleteMatch(Match: Match): Observable<any> {
  //   const url = `${this.url}/${Match.id}`;
  //   return this.http.delete<Match>(url, httpOptions);
  // }

  // addMatch(Match: Match): Observable<any> {
  //   return this.http.post<Match>(this.url, Match, httpOptions);
  // }
}
