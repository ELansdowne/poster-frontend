import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { PosterPreviewComponent } from 'src/app/dashboard/shared/component/poster-preview/poster-preview.component';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  onWishlistAdd(): void {
    this.snackBar.open('Added to favourites', 'OK', {
      duration: 2000
    });
  }
  onImagePreview(): void {
    const dialogRef: any = this.dialog.open(PosterPreviewComponent, {
      data: { name: 'aka' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
