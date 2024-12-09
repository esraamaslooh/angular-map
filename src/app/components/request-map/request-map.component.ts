import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServicesPopupComponent} from "../services-popup/services-popup.component";
import {MatDialog} from "@angular/material/dialog";
import {ServicesService} from "../../../services/services.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-request-map',
  templateUrl: './request-map.component.html',
  styleUrl: './request-map.component.scss'
})
export class RequestMapComponent implements OnInit {
  center = {lat: 24.7136, lng: 46.6753}; // Default coordinates (Riyadh)
  markerPosition = {lat: 24.7136, lng: 46.6753};
  zoom = 15;
  address = 'Jabal Shaam, 3990';
  services:any[] = [];
  markerIcon: google.maps.Icon = {
    url: 'assets/imgs/pin-blue.png', // Path to your custom icon
  };

  constructor(private dialog: MatDialog, private router: Router, private servicesService: ServicesService) {
  }

  ngOnInit() {
    this.fetchServices();
  }

  fetchServices() {
    this.servicesService.getServices().subscribe(
      (response) => {
        this.services = response.services;
      },
      (error) => {
        console.error('Error fetching services:', error);
      }
    );
  }

  setMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPosition = event.latLng.toJSON();
    }
  }

  selectServices() {
    
    this.dialog.open(ServicesPopupComponent, {
      data: {services: this.services},
      width: '400px',
    });
    /*
        this.router.navigate(['/request-details']);
    */
  }




}
