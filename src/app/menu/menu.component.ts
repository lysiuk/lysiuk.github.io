import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IMenuItem } from '../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  menuItems: IMenuItem[] = [];
  linksItems: IMenuItem[] = [];

  constructor() {
    this.menuItems = [
      {
        url: 'about',
        iconName: 'about',
        name: 'About'
      },
      {
        url: 'experience',
        iconName: 'experience',
        name: 'Experience'
      },
      {
        url: 'skills',
        iconName: 'skills',
        name: 'Skills'
      },
      {
        url: 'works',
        iconName: 'works',
        name: 'Works'
      }
    ]

    this.linksItems = [
      {
        url: 'https://www.linkedin.com/in/v-lysiuk/',
        iconName: '../svg/linkedin.svg',
        name: 'LinkedIn'
      },
      {
        url: 'mailto:vladimir.lysuk@gmail.com',
        iconName: '../svg/email.svg',
        name: 'E-mail'
      },
      {
        url: 'https://drive.google.com/open?id=1F6YrEqv89Klaevne4gzquOGPytOJMnxw',
        iconName: '../svg/cv.svg',
        name: 'Resume'
      }
    ]
  }

  ngOnInit(): void {}
}
