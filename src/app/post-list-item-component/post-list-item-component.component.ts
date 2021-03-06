import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() created_at: Date;
  @Input() content: string;
  @Input() loveIts: number;

  constructor() { }

  ngOnInit() {
  }


  onMore(){
    this.loveIts = this.loveIts + 1;
    
  }

  onLess(){
    this.loveIts = this.loveIts - 1;
  }

}
