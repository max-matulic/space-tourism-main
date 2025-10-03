import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { crew } from '../../../data/data.json';
import { Crew } from './model/crew.interface';

@Component({
  selector: 'app-crew',
  imports: [NgClass],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss',
})
export class CrewComponent {
  crewList: Crew[] = crew;
  filteredCrew: Crew[] = [
    {
      name: 'Douglas Hurley',
      images: {
        png: './assets/crew/image-douglas-hurley.png',
        webp: './assets/crew/image-douglas-hurley.webp',
      },
      role: 'Commander',
      bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    },
  ];

  constructor() {
    console.log(this.crewList);
  }

  getCrew(crew: string) {
    this.filteredCrew = this.crewList.filter(
      (crewMember) => crewMember.name === crew
    );
    console.log(this.filteredCrew);
    return this.filteredCrew;
  }
}
