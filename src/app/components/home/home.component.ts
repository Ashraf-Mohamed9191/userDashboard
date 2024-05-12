import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private _UserApiService:UserApiService , private _Router:Router){}

  userData:Users[] = [] ;
  
  pageSize:number = 0; //limit
  currentPage:number = 1;
  total:number = 0;

  term:string = '';

  ngOnInit(): void {
      this._UserApiService.getUsers().subscribe({
        next:(response)=>{
          // console.log(response.data);
          this.userData = response.data ; 
          this.pageSize = response.per_page;
          this.currentPage = response.page;
          this.total = response.total;          
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }


  userDetails(id:number):void{
    this._Router.navigate(['/details' , id]);
  }


  pageChanged(event:any):void{
    this._UserApiService.getUsers(event).subscribe({
      next:(response)=>{
        // console.log(response.data);
        this.userData = response.data ; 
        this.pageSize = response.per_page;
        this.currentPage = response.page;
        this.total = response.total;          
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
