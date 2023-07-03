import { Component } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  allNews : any 
  articlesData : any = []
    constructor(private newsService: NewsServiceService){
      this.newsService.getBusinessNews().subscribe((response)=>{
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
