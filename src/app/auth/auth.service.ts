import { Router } from '@angular/router';
<<<<<<< HEAD
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
=======
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
>>>>>>> 278d18a2748b58c9c2111204daa2d95352fd7371

@Injectable()
export class AuthService {
  token: string;

<<<<<<< HEAD
  constructor(private router: Router) {}
=======
  constructor(private router: Router) { }
>>>>>>> 278d18a2748b58c9c2111204daa2d95352fd7371

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
<<<<<<< HEAD
      )
=======
      );
>>>>>>> 278d18a2748b58c9c2111204daa2d95352fd7371
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
<<<<<<< HEAD
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
=======
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token;
            );
        }
      )
      .catch(
        error => console.log(error);
>>>>>>> 278d18a2748b58c9c2111204daa2d95352fd7371
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
<<<<<<< HEAD
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
=======
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token;
>>>>>>> 278d18a2748b58c9c2111204daa2d95352fd7371
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
