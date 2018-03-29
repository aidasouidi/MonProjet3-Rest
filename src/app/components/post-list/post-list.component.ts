import { Component, OnInit } from '@angular/core';
import { IPost } from '../../model/ipost';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  data: IPost[];

  constructor(private _service: PostsService) { }

  ngOnInit() {
    this._service.getPosts().subscribe(p => this.data = p);
  }

}
