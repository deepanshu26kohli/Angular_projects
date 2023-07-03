import { Component } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  allNews : any 
  articlesData : any = []
    constructor(private newsService: NewsServiceService){
      this.newsService.getHealthNews().subscribe((response)=>{
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
