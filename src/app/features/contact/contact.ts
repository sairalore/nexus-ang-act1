import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive, CommonModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
