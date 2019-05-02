import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/services/news-service.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(public newsService: NewsServiceService) { }

  ngOnInit() {
  }

}
