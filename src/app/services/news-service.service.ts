import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http : HttpClient) { }
  getNews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=3131a422f6364bd998bf749b5424532e")
  }
  getHealthNews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=3131a422f6364bd998bf749b5424532e")
  }
  getBusinessNews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3131a422f6364bd998bf749b5424532e")
  }
  getEntertainmentNews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3131a422f6364bd998bf749b5424532e")
  }
  getSportsNews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3131a422f6364bd998bf749b5424532e")
  }
  getTechnologyNews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=3131a422f6364bd998bf749b5424532e")
  }
  getScienceNews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=3131a422f6364bd998bf749b5424532e")
  }

}
