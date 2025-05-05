import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Package {
  id: string,
  weeklyDownloads: number,
  dependencyCount: number,
  dependency: boolean
}

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private _httpClient: HttpClient) { }

  public getPackage(): Observable<Package[]> {
    return this._httpClient.get<Package[]>('http://localhost:3000/packages').pipe(
      map((post) => {
        return post.map(item => {
          return {
            ...item,
            dependency: false
          }
        })
      })
    );
  }

  public getPackageDependencies(id: string): Observable<String[]> {
    return this._httpClient.get<String[]>(`http://localhost:3000/packages/${id}/dependencies`);
  }
}
