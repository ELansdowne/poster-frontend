import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterPreviewComponent } from './poster-preview.component';

describe('PosterPreviewComponent', () => {
  let component: PosterPreviewComponent;
  let fixture: ComponentFixture<PosterPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
