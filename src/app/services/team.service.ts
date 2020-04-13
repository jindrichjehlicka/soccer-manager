import { Team } from "src/app/models/team";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json",
    mode: "no-cors",
  }),
};
@Injectable({
  providedIn: "root",
})
export class TeamService {
  url = "http://localhost:8181/teams/";

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.url);
  }

  getTeam(id: number): Observable<Team> {
    const url = `${this.url}${id}`;
    return this.http.get<Team>(url);
  }

  addTeam(Team: Team): Observable<any> {
    return this.http.post<Team>(this.url, Team, httpOptions);
  }

  deleteTeam(Team: Team): Observable<any> {
    const url = `${this.url}${Team.id}`;
    return this.http.delete<Team>(url, httpOptions);
  }

  updateTeam(Team: Team): Observable<any> {
    const url = `${this.url}${Team.id}`;
    return this.http.put<Team>(url, Team, httpOptions);
  }
}
