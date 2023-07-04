import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getPosts(limit?: number) {
    const { appUrl } = environment;
    const limitFilter=limit ? `?limit=${limit}`: ''
    return this.http.get(`${appUrl}/posts${limitFilter}`)
  }
  getThemes() {
    // return observable
    const { appUrl } = environment;
    return this.http.get(`${appUrl}/themes`)
  }
}
