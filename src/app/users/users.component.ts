import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  jobTitle: string;
  age: any;
  nickName: string;
  symbol: string;
}

const USER_DATA: PeriodicElement[] = [
  {age: 40, name: 'Giacomo Guilizzoni', jobTitle:'Founder & CEO', nickName: 'Peldi', symbol: 'Yes'},
  {age: 38, name: 'Marco Botton', jobTitle:'Tuttofare', nickName: '', symbol: 'Yes'},
  {age: 41, name: 'Mariah Maclachian', jobTitle:'Better Half', nickName: 'Patata', symbol: 'No'},
  {age: '(;', name: 'Valerie Liberty', jobTitle:'Head Chif', nickName: 'Val', symbol: 'Yes'},

];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  displayedColumns: string[] = [ 'name','age', 'nickName', 'symbol'];
  dataSource = USER_DATA;
 
  
  constructor() { }

  ngOnInit(): void {
  }

}
