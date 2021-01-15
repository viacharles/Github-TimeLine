import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repo } from '../shared/models/repos.model';
import {catchError} from 'rxjs/operators'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private http: HttpClient) {
    // this.setRepos();
    // this.setCommits();
  }

  ngOnInit(): void {
    // this.setCommits(this.userName, this.repoName)
  }
  public repos: Repo[] = [];
  public userName: string;
  public switchButton: boolean= true;

  public deletList() {
    this.repos = [];
    this.switchButton = !this.switchButton;
  }

  public getRepos() {
    this.switchButton = !this.switchButton;
    this.http
      .get(`https://api.github.com/users/${this.userName}/repos`)
      .subscribe((res: any) => {
        res.forEach((repo) => this.getCommits(repo));
      });
  }

  private getCommits(repo: any) {
    this.http
      .get(`https://api.github.com/repos/${this.userName}/${repo.name}/commits`)
      .pipe(
        catchError(error => {
          this.repos.push(new Repo(repo));
          throw error;
        })
      )
      .subscribe((res: any) => this.repos.push(new Repo(repo, res)));
  }

}
