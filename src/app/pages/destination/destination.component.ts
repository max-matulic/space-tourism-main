import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { destinations } from '../../../data/data.json';
import { Destination } from './model/destination.interface';
@Component({
  selector: 'app-destination',
  imports: [NgClass],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss',
})
export class DestinationComponent {
  destinationList: Destination[] = destinations;
  filteredDestination: Destination[] = [
    {
      name: 'Moon',
      images: {
        png: './assets/destination/image-moon.png',
        webp: './assets/destination/image-moon.webp',
      },
      description:
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 km',
      travel: '3 days',
    },
  ];

  getDestination(destination: string) {
    this.filteredDestination = this.destinationList.filter(
      (dest) => dest.name === destination
    );
    return this.filteredDestination;
  }
}
