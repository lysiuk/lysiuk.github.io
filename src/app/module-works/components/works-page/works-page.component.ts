import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMenuItem } from '../../../interfaces/menu.interface';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksPageComponent {
  worksItems: IMenuItem[] = [
    {
      url: 'https://www.koblevo.ua/',
      iconName: 'assets/images/koblevo.png',
      name: 'Koblevo'
    },
    {
      url: 'https://www.koblevo.ua/',
      iconName: 'assets/images/koblevo.png',
      name: 'Koblevo'
    }
  ];

  constructor() { }
}
