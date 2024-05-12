import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute , private _UserApiService:UserApiService , private _Router:Router , private _Location:Location){}


  userDetails:any = {};

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          let userId = params.get('id');
          // console.log(userId);
          
          this._UserApiService.getUserDetails(userId).subscribe({
            next:(response)=>{
              console.log(response.data);
              this.userDetails = response.data;
            },
            error:(err)=>{
              console.log(err);
              
            }
          })
        }
      })
  }


  goBack():void{
    this._Location.back();
  }
}
