import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
    document.getElementById('defaultOpen').click();
  }

  openWork(event, employer) {
    let i;
    let menuContent;
    let tablinks;
    menuContent = document.getElementsByClassName('menu-content');
    for (i = 0; i < menuContent.length; i++) {
      menuContent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('menu-item');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(employer).style.display = 'block';
    event.currentTarget.className += ' active';
  }
}
