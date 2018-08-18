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
    MatDialogModule
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
                MatDialogModule
],
    exports: [MatButtonModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatDialogModule,
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

