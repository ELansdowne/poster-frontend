import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  DateAdapter,
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  NativeDateAdapter
} from '@angular/material';
import { LayoutNavComponent } from './components/layout-nav/layout-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderDialogComponent } from '../dashboard/shared/dialog/loader-dialog/loader-dialog.component';
const ANGULAR_MODULE: any[] = [FormsModule, ReactiveFormsModule];
const ANGULAR_LAYOUT_MODULE: any[] = [FlexLayoutModule];
const MATERIAL_MODULES: any[] = [
  CdkTableModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSliderModule,
  MatSidenavModule,
  MatStepperModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSortModule,
  MatDividerModule,
  MatAutocompleteModule,
  MatStepperModule,
  MatBadgeModule
];
const LAYOUT_COMPONENTS: any[] = [
  // LayoutComponent,
  LayoutNavComponent
  // NavigationDrawerComponent,
  // LoaderComponent,
  // FooterComponent
];
const SHARED_COMPONENTS: any[] = [
  // SafeHtmlPipe,
  // PricePipe,
  // GroupByPipe,
  // SubscribersChainComponent,
  // NoDataAvailableComponent,
  // AddressSuggestionComponent
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ANGULAR_MODULE,
    MATERIAL_MODULES,
    ANGULAR_LAYOUT_MODULE
  ],
  declarations: [
    LAYOUT_COMPONENTS,
    SHARED_COMPONENTS,
    LayoutNavComponent,
    HeaderComponent,
    LoaderDialogComponent
  ],
  entryComponents: [LoaderDialogComponent],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter }
    // LoaderService,
    // FileHandlerService
  ],
  exports: [
    ANGULAR_MODULE,
    ANGULAR_LAYOUT_MODULE,
    MATERIAL_MODULES,
    LAYOUT_COMPONENTS,
    SHARED_COMPONENTS
  ]
})
export class SharedModule {}
