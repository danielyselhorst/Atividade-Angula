import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.services';
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
  
export class UsersList implements OnInit {

  usuarios: UserInterface[] = [];
  loading = true;
  erro = false;

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.userService.listarUsuarios().subscribe({
      next: (dados) => {
        this.usuarios = dados;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = true;
        this.loading = false;
      }
    });
  }
}