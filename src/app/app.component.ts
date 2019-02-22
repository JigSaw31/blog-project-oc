import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  posts = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dictum felis. Vestibulum vitae aliquam tellus, vitae efficitur orci. Suspendisse interdum nisl pharetra placerat bibendum.",
      loveIts: 0,
      created_at: new Date()
    },

    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dictum felis. Vestibulum vitae aliquam tellus, vitae efficitur orci. Suspendisse interdum nisl pharetra placerat bibendum.",
      loveIts: 0,
      created_at: new Date()
    },

    {
      title: "Encore un post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dictum felis. Vestibulum vitae aliquam tellus, vitae efficitur orci. Suspendisse interdum nisl pharetra placerat bibendum.",
      loveIts: 0,
      created_at: new Date()
    }
  ];

}
