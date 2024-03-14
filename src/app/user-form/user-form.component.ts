import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() 

  userList: User[] = [];
  formUser=new FormGroup({
    id: new FormControl<number>(0),
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  })


  

  constructor(private user: UserService) {
    // prod.getAllProductList().subscribe((data) => {
    //   this.productList = data
    // });
  }

  ngOnInit(): void {
    
    this.user.getAllUserList().subscribe((data) => {
      this.userList = data
    })
  }

  file: string = '';
  IsAdd:number = 1;
  IsUpdate:number = 0;
  
  Add() {
    this.user.AddUser(this.formUser.value).subscribe(res => {
      this.ngOnInit()
    })
  }
  id: any;
  Edit(index: number) {
    this.id = this.userList[index].id
  
    this.formUser.controls['email'].setValue(this.userList[index].email)
    this.formUser.controls['password'].setValue(this.userList[index].password)
  }

  Update() {

    this.user.UpdateUser(this.id, this.formUser.value).subscribe(res => {
      this.ngOnInit()
    })
  }
  Delete(index: number) {
    this.id = this.userList[index].id
    this.user.DeleteUser(this.id).subscribe(res => {
      this.ngOnInit()
    })
  }
}