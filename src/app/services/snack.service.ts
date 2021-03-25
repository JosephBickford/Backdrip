import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  authError() {
    this.snackBar.open('You must be logged in to view this page ✌️', 'Log-In', {
      duration: 5000,
    });

    return this.snackBar._openedSnackBarRef
      .onAction()
      .pipe(
        tap((_) => {
          this.router.navigate(['/login']);
        })
      )
      .subscribe();
  }
}
