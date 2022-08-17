import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Angular Web Site Template | ";
  // isLoading: boolean = true;
  showMenu: boolean = false;
  public constructor(private titleService: Title, private router: Router) {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(this.title + newTitle);
    this.showMenu = false;
  }

  currentDate = new Date();
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}