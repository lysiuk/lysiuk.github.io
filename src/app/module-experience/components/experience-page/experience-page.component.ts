import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IExperienceItem } from '../../../interfaces/experience-item.interface';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencePageComponent {
  expItems: IExperienceItem[] = [
    {
      position: 'Front-end dev (Angular)',
      company: 'SvitSoftware (SvitSoft)',
      date: 'may 2019 - present',
      about: [
        'Develops and implements solutions',
        'Implement different services, models and components',
        'Developing and Administer the new Angular based website'
      ]
    },
    {
      position: 'Front-end dev (Angular)',
      company: 'Agima (outstaff)',
      date: 'november 2020 - july 2021',
      about: [
        'Fix bugs in admin panel',
        'Implement new features',
        'Developing web application'
      ]
    },
    {
      position: 'Html-coder',
      company: 'SvitSoft',
      date: 'july 2018 - may 2019',
      about: [
        'Create markup of different difficulties',
        'Editing Angular components',
        'Create different animations'
      ]
    },
    {
      position: 'Html-coder',
      company: 'Apelsun WebStudio',
      date: 'may 2017 - june 2018',
      about: [
        'Create sites on CMS Joomla',
        'Editing CMS modules',
        'Markup from PSD/Figma layouts to html'
      ]
    }
  ];

  constructor() { }
}
