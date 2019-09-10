import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


interface IExperienceData {
    title: string;
    company: string;
    descriptions: string[];
    imagePath: string;
}

@Component({
  selector: 'experience-component',
  templateUrl: './experience.component.html',
  styleUrls: ['../app.component.css']
})

export class ExperienceComponent {
    htmlData: any;
    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit() {
        this.htmlData = this.sanitizer.bypassSecurityTrustHtml('<h1>Hello</h1>');
    }

    private populateCards() {
        const experiences: IExperienceData[] = [
            {
                title: 'Software Engineering Intern',
                company: 'LifeShare Technologies LLC',
                descriptions: ['Developed full stack features for 3 separate platforms all supported by 1 backend API',
                                'Completed a major redesign overhaul of the Family Manager mobile app built using an Ionic Framework',
                                'Led project redesigning mobile app and applying native Android and iOS interface standards'],
                imagePath: 'lifeshare.jpg'
            },
            {
                title: 'Software Development Engineering Intern',
                company: 'Groupon Inc',
                descriptions: ['blah',
                                'blah2',
                                'blah3'],
                imagePath: 'groupon.jpg'
            }
        ];
    }

}