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
        iconName: '../svg/about.svg',
        name: 'About'
      },
      {
        url: 'experience',
        iconName: '../svg/experience.svg',
        name: 'Experience'
      },
      {
        url: 'skills',
        iconName: '../svg/skills.svg',
        name: 'Skills'
      },
      {
        url: 'works',
        iconName: '../svg/works.svg',
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
