import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})
export class RequestDetailsComponent {
  provider = {
    name: 'Mostafa',
    photo: 'assets/imgs/provider-photo.png',
    rating: 5,
    phone: '+966500000000',
  };

  status = ['Pending', 'On Way', 'Delivered', 'Working', 'Completed'];
  currentStatus = 1;
  center = { lat: 24.7136, lng: 46.6753 };
  providerLocation = { lat: 24.715, lng: 46.678 };
  markerIcon: google.maps.Icon = {
    url: 'assets/imgs/provider-marker.png', // Path to your custom icon
  };
  constructor(private router: Router ) {
  }

  callProvider() {
    window.open(`tel:${this.provider.phone}`, '_self');
  }

  navigateBack() {
    this.router.navigate(['/request-map']);
  } 

}
