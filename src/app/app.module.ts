import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FiltersComponent } from './content/filters/filters.component';
import { PaginationComponent } from './content/pagination/pagination.component';
import { NewsListComponent } from './content/news-list/news-list.component';
import { NewsItemComponent } from './content/news-list/news-item/news-item.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    FiltersComponent,
    PaginationComponent,
    NewsListComponent,
    NewsItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
