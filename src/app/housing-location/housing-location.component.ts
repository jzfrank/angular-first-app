import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  template: ` <p>housing-location works!</p> `,
  styleUrl: './housing-location.component.css',
  standalone: true,
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
