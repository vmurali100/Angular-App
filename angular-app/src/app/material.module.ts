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
    MatListModule
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
                MatListModule
],
    exports: [MatButtonModule, 
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

