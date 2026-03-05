import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.services';
import { UserInterface } from '../../models/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.css'],
})
export class UserDetail implements OnInit {

  usuario?: UserInterface; // ele guarda os dados do usuário encontrado

  loading = true;
  erro = false;
  naoEncontrado = false;
  idInvalido = false;

constructor(
  private route: ActivatedRoute, //ele lê o ID da URL
  private userService: UserService, //ele busca o usuário na API
  private cdr: ChangeDetectorRef

) {}

ngOnInit() {

  this.route.paramMap.subscribe(params => { // ele atualiza altomatimacente

  //vai limpar tudo antes de procurar outro usuario
  this.loading = true;
  this.erro = false;
  this.naoEncontrado = false;
  this.idInvalido = false;
  this.usuario = undefined;
  

const idParam = params.get('id'); // ele pega o ID da URL


//validar se o ID é invalido
if (!idParam || isNaN(Number(idParam))) { // se alguem digitar letra ele vai ativar como invalido
  this.idInvalido = true;
  this.loading = false;
  return;
}

const id = Number(idParam); //ele converte para numero

if (id < 1 || id > 10) { // se for < 1 ou > 10 ele valida o nao encontrado
  this.naoEncontrado = true;
  this.loading = false;
  return;
}


this.userService.buscarUsuarioPorId(id).subscribe({
  next: (dados) => { //ele vai guardar o dados para loading e atualizar a tela
    this.usuario = dados;
    this.cdr.detectChanges();
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