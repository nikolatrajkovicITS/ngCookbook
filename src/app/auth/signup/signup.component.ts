import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
<<<<<<< HEAD

=======
>>>>>>> 278d18a2748b58c9c2111204daa2d95352fd7371
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }
<<<<<<< HEAD

=======
>>>>>>> 278d18a2748b58c9c2111204daa2d95352fd7371
}
