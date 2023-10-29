import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  user: any;

  constructor(
    public dialogRef: MatDialogRef<UpdateProfileComponent>,
    private userService: UserService,
    private snackBar: MatSnackBar // Add MatSnackBar to the constructor
  ) {}

  updateProfile() {
    // Implement the update logic here and send the updated user data to your backend
    this.userService.updateUserProfile(this.user.id, this.user).subscribe(
      (response) => {
        this.snackBar.open('Profile updated successfully', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success'],
        });

        this.dialogRef.close();
      },
      (error) => {
        this.snackBar.open('Error updating profile', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
        });
      }
    );
  }
}
