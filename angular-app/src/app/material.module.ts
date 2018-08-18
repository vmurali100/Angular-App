import { NgModule } from '@angular/core';
import {MatButtonModule, 
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
    } from '@angular/material';
@NgModule({
    imports: [MatButtonModule, 
                MatCheckboxModule,
                MatFormFieldModule,
                MatInputModule,
                MatToolbarModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatSidenavModule,
                MatIconModule,
                MatListModule,
                MatTabsModule,
                MatCardModule,
                MatSelectModule,
                MatProgressSpinnerModule,
                MatDialogModule,
                MatTableModule,
                MatSortModule,
                MatPaginatorModule   
],
    exports: [MatButtonModule,
        MatTableModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatDialogModule,
        MatSortModule,
        MatPaginatorModule,
            MatTabsModule, 
            MatCheckboxModule,    
            MatFormFieldModule,
            MatInputModule,
            MatToolbarModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule 
    ]
  })
export class MaterialModule{

}

