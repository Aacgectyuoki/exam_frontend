import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { UpdateProfileComponent } from 'src/app/pages/update profile/update-profile/update-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any = {};
  constructor(private login: LoginService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.user = this.login.getUser();
    // this.login.getCurrentUser().subscribe(
    //   (user: any) => {
    //     this.user = user;
    //   },
    //   (error) => {
    //     alert('error');
    //   }
    // );
  }

  
  openUpdateProfileDialog() {
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      data: this.user // Pass the user data to the update profile dialog
    });

    dialogRef.afterClosed().subscribe((updatedUser) => {
      if (updatedUser) {
        // Handle the updated user data here
        this.user = updatedUser;
      }
    });
  }
}
