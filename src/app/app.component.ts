import { Component } from '@angular/core';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  photos = [
    {
      description: 'bike',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Achol_Akhe_in_Bike.jpg',
    },
    {
      description: 'city',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/ConcertgebouwMuseumpleinAmsterdam.jpg/800px-ConcertgebouwMuseumpleinAmsterdam.jpg',
    },
  ];
}
