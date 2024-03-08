import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(protected router: Router) { }

  isDark = true 

  ngOnInit(): void {

    const storedIsDark = localStorage.getItem('isDark');

    if (storedIsDark !== null) {
      this.isDark = JSON.parse(storedIsDark);
    }
    
    document.body.className = this.isDark ? 'dark' : 'light'
  }

  toggleTheme(){
    this.isDark = !this.isDark
    localStorage.setItem('isDark', JSON.stringify(this.isDark));
    document.body.className = this.isDark ? 'dark' : 'light'
  }

}
