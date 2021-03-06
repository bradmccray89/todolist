import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public email = ''
  @Output() showNav: EventEmitter<string> = new EventEmitter()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    console.log('signup', this.email)
    this.close()
  }

  close() {
    this.router.navigateByUrl('/')
  }

}
