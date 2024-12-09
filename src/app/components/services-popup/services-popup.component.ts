import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-services-popup',
  standalone: true,
  templateUrl: './services-popup.component.html',
  styleUrl: './services-popup.component.scss'
})
export class ServicesPopupComponent{
  selectedService: string | null = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { services: string[] },
    private router: Router,
    public dialogRef: MatDialogRef<ServicesPopupComponent>
  ) {}

  selectService(service: string) {
    this.selectedService = service;
  }

  confirmSelection() {
    this.router.navigate(['/request-details']);
    this.dialogRef.close(this.selectedService);
  }

  closeDialog() {
    this.dialogRef.close(null);
  }
}
