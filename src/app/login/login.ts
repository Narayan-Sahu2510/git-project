import { Component ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
user = {
    email: '',
    password: ''
  };

  rememberMe: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic
  }

  /**
   * Handles the form submission logic.
   */
  onLogin() {
    if (this.user.email && this.user.password) {
      console.log('--- Submitting Login Form ---');
      console.log('Email:', this.user.email);
      console.log('Password:', this.user.password);
      // Implement your authentication service call here
    }
  }
}
