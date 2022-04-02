import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUser().subscribe(response => {
      this.users = response;
    }, (err) =>{
      console.log('ERRO AO EXECUTAR READ', err.status);
    }  )
  }

  deleteUser(id: number): void{
    this.userService.deleteUser(id).subscribe(response =>{
      console.log('Usuario Excluido!')
    }, (err) =>{
      console.log('ERRO AO DELETAR USUARIO',err.status)
    }, () => {
      this.getUsers()
    })

  }
}


