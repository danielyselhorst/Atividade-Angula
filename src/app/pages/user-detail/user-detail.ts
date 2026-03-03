import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.services';
import { UserInterface } from '../../models/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.css'],
})
export class UserDetail implements OnInit {

  usuario?: UserInterface;

  loading = true;
  erro = false;
  naoEncontrado = false;
  idInvalido = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

    //RESETAR ESTADOS AQUI
    this.loading = true;
    this.erro = false;
    this.naoEncontrado = false;
    this.idInvalido = false;
    this.usuario = undefined;

    //PEGAR O ID DA URL
    const idParam = params.get('id');

if (!idParam || isNaN(Number(idParam))) {
  this.idInvalido = true;
  this.loading = false;
  return;
}

const id = Number(idParam);

// AQUI É ONDE ARRUMA
if (id < 1 || id > 10) {
  this.naoEncontrado = true;
  this.loading = false;
  return;
}

// Depois disso continua normal
this.userService.buscarUsuarioPorId(id).subscribe({
  next: (dados) => {
    this.usuario = dados;
    this.loading = false;
  },
  error: () => {
    this.erro = true;
    this.loading = false;
  }
});
    });
  }
}