export class Repo {
  public id: number;
  public nodeId: string;
  public name: string;
  public fullName: string;
  public privacy: boolean;
  public owner: Owner;
  public htmlUrl: string;
  public description: string;
  public createdAt: Date;
  public updatedAt: Date;
  public size: number;
  constructor(repo: any, public commits: any[] = []) {
    this.id = repo.id;
    this.nodeId = repo.node_id;
    this.name = repo.name;
    this.fullName = repo.full_name;
    this.privacy = repo.privacy;
    this.owner = repo.owner;
    this.htmlUrl = repo.html_url;
    this.description = repo.description;
    this.createdAt = repo.created_at;
    this.updatedAt = repo.updated_at;
    this.size = repo.size;
  }
}
export class Owner {
  constructor(
    public login: string,
    public id: number,
    public nodeId: string,
    public avatar_url: string,
    public gravatar_id: string,
    public url: string,
    public htmlUrl: string,
    public followersUrl: string,
    public followingUrl: string,
    public gistsUrl: string,
    public starredUrl: string,
    public subscriptionsUrl: string,
    public orgnizationsUrl: string
  ) {}
}

export class Commits {
  constructor(
    public sha: string,
    public commit: Commit[],
    public htmlUrl: string
  ) {}
}
export class Commit {
  constructor(public commiter: Committer[], public message: string) {}
}
export class Committer {
  constructor(public name: string, public date: Date) {}
}

export class User {
  constructor(public repos?: Repo[]) {}
}
export class RepoName {
  constructor(public repoName: string) {}
}
