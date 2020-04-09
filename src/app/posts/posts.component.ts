import {Component, Input} from '@angular/core';
import {PostsModel} from '../../models/PostsModel';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input()
  post: PostsModel;

  constructor() {
  }
}
