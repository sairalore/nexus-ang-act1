import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, CommonModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {

}
