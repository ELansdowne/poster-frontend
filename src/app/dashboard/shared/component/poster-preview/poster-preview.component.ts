import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poster-preview',
  templateUrl: './poster-preview.component.html',
  styleUrls: ['./poster-preview.component.scss']
})
export class PosterPreviewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PosterPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}
  onProductDetails(): void {
    this.dialogRef.close();
    this.router.navigate(['/details']);
  }
}
