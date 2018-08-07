import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
<<<<<<< HEAD
    firebase.initializeApp({
      apiKey: "AIzaSyDGDTtGNC4FkKpSe85qb2wLHzNi2xkxFy8",
      authDomain: "ng-recipe-book.firebaseapp.com"
    });
=======
     firebase.initializeApp({
      apiKey: "AIzaSyBSiNsQRAskjgJizSLWTBbpy_uxKNmlpa4",
      authDomain: "cookbook-101ab.firebaseapp.com",
     });
>>>>>>> 278d18a2748b58c9c2111204daa2d95352fd7371
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
