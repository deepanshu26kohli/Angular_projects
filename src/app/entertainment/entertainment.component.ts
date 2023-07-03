import { Component } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {
  allNews : any 
  articlesData : any = []
    constructor(private newsService: NewsServiceService){
      this.newsService.getEntertainmentNews().subscribe((response)=>{
        if(response)
        {
          this.allNews = response
          console.log(this.allNews)
          for (let i=0;i<this.allNews.articles.length;i++){
                  this.articlesData[i] = this.allNews.articles[i]
          }
          console.log(this.articlesData)
        }
      })

    }
}
