import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  newsList = null;
  paginatedNewsList = null;
  currentPage = 0;
  pages: number = null;
  categoryList = [];
  selectedCategory = null;
  pageSize = 6;
  pagesArray = [];


  constructor(private http: HttpClient) {
    this.http.get('https://newsapi.org/v1/sources').subscribe( (list:any) => {
      this.newsList = list.sources;
      this.paginatedNewsList = list.sources;
      this.paginateNews();
      this.getAllCategories();
    }, err => {
      console.log('Error retrieving the news list', err);
    });
  }

  getAllCategories(){
    this.newsList.forEach( news => {
      var category = news.category;

      if(!this.categoryList.includes(category)) {
        this.categoryList.push(category);
      }
    });

    console.log(this.categoryList);
  }

  paginateNews(page?){
    console.log('page', page);
    if(page){
      var start_from = (page * 6);
      var stop_at = start_from + 6;

      if(page > this.currentPage){
        this.currentPage = this.currentPage+1;
      }else if(page < this.currentPage) {
        this.currentPage = this.currentPage-1;
      }

    }else{
      var start_from = (this.currentPage * 6);
      var stop_at = start_from + 6;
    }
    var newsCount = this.newsList.length;
    console.log('news count', newsCount);
    this.pages = Math.ceil(newsCount / 6);
    console.log('pages', this.pages);
    for(let i = 0; i <= this.pages; i++){
      this.pagesArray.push(i);
    }

    this.paginatedNewsList = this.newsList.slice(start_from, stop_at);

  }
}
