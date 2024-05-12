import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './users';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users:Users[] , term:string): Users[] {
    return users.filter( (user)=>user.first_name.toLowerCase().includes(term.toLowerCase()) );
  }

}
