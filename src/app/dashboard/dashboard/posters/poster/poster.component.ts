import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  onWishlistAdd(): void {
    this.snackBar.open('Added to favourites', 'OK', {
      duration: 2000
    });
  }
}
