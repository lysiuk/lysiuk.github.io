import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ISkillItem } from '../../../interfaces/skill-item.interface';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsPageComponent {
  skillItems: ISkillItem[] = [
    {
      name: 'Angular',
      color: '#b52e31',
      percent: 75
    },
    {
      name: 'Coffee drinking',
      color: '#6f4e37',
      percent: 93
    },
    {
      name: 'TS',
      color: '#3178c6',
      percent: 75
    },
    {
      name: 'RxJs',
      color: '#fd2155',
      percent: 65
    },
    {
      name: 'HTML/CSS',
      color: '#05fdd8',
      percent: 88
    },
    {
      name: 'Sass/Less',
      color: '#d26cd5',
      percent: 88
    },
    {
      name: 'Eating pizza',
      color: '#e1d800',
      percent: 100
    },
    {
      name: 'BEM',
      color: '#05fdd8',
      percent: 90
    },
    {
      name: 'JS',
      color: '#f7df1e',
      percent: 65
    }
  ];

  constructor() { }
}
