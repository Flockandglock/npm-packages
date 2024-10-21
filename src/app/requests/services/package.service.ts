import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Package {
  id: string,
  weeklyDownloads: number,
  dependencyCount: number
}

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private _httpClient: HttpClient) { }

  public getPackage(): Observable<Package[]> {
    return this._httpClient.get<Package[]>('http://localhost:3000/packages');
  }

  public getPackageDependencies(id: string): Observable<String[]> {
    return this._httpClient.get<String[]>(`http://localhost:3000/packages/${id}/dependencies`);
  }
}
