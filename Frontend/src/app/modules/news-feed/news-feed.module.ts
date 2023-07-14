import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ContentsComponent } from './contents/contents.component';
import { PostNewComponent } from './post-new/post-new.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './service/post.service';


@NgModule({
  declarations: [
    NewsFeedComponent,
    ContentsComponent,
    PostNewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    // DatetransPipe
  ],
  providers: [PostService]
})
export class NewsFeedModule { }
