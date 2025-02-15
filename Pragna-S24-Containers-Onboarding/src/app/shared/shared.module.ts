import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// External Modules
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// Containers

// Components

// Pipes

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    // External Modules
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    // Containers
    // Components
    // Pipes
  ],
  exports: [
    RouterModule,
    FormsModule,
    // External Modules
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    // Containers
    // Components
    // Pipes
  ],
})
export class SharedModule { }
