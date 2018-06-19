import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PixaDataService {
  
  constructor(private http: HttpClient) { }

  getImage(): Observable<IResult> {
    return this.http.get<IResult>('https://pixabay.com/api?key=9275346-865b1653288d60024eb42c11b');
  }

  searchImage(q: string): Observable<IResult> {
    return this.http.get<IResult>(`https://pixabay.com/api?key=9275346-865b1653288d60024eb42c11b&q=${q}`);
  }

  getClip(): Observable<IResult> {
    return this.http.get<IResult>('https://pixabay.com/api/videos?key=9275346-865b1653288d60024eb42c11b');
  }

  searchClip(q: string): Observable<IResult> {
    return this.http.get<IResult>(`https://pixabay.com/api/videos?key=9275346-865b1653288d60024eb42c11b&q=${q}`);
  }
}

export interface Iimage {
  largeImageURL: string,
  likes: number,
  id: number,
  user_id: number,
  pageURL: string,
  webformatURL: string,
  user: string,
  userImageURL: string,
  previewURL: string
}

export interface IResult {
  totalHits: number,
  hits: Array<Iimage>,
  total: number
}

export interface IClip {
  id: number,
  picture_id: string,
  likes: number,
  duration: number,
  views: number,
  user_id: number,
  userImageURL: string,
  user: string,
  pageURL: string,
  videos: {
    large: IClipType,
    small: IClipType,
    medium: IClipType
  }
}

export interface IClipType {
  url: string,
  width: number,
  height: number
}
