import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'michelle-website';
  link = [''];

  constructor(
    private router: Router) {

    }

  ngOnInit(): void {
    const link = ['home'];
    this.router.navigate(link);
  }
  
  onClick(route :string) {
    this.router.navigate([route]);
  }
}
