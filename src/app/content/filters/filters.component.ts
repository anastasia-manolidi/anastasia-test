import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor( public newsService: NewsServiceService ) { }

  ngOnInit() {
  }

  categoryFilter(category){
    console.log('category', category);
    this.newsService.paginatedNewsList = this.newsService.newsList;
    if(!(category == '-1')) {
      this.newsService.paginatedNewsList = this.newsService.paginatedNewsList.filter(el => el.category.includes(category));
    }
  }

  searchFilter(query){
    console.log(query);
    this.newsService.paginatedNewsList = this.newsService.newsList;
    if(query.length > 0 ){
      this.newsService.paginatedNewsList = this.newsService.paginatedNewsList.filter(el => el.name.toLowerCase().indexOf(query) >= 0);
    }
  }

}
