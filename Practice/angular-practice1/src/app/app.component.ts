import { Student } from './comon/Student';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { CommonModule, NgFor} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Questions } from './comon/Questions'
import { Product } from './comon/Product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.st)
  }

  title = 'Lập trình Angular cơ bản';
  q: Questions = {
    q1:'Component ?',
    q2:'Data Binding ?',
    q3:'Http, service ?',
    q5:'SPA ? Routing ?',
    q7:'From handler ?',
    q8:'Authentication ?',
    q9:'Module ? Freature Module ? Lazy Loaded Module ?',
    q10:'Deploying ?'
  }
  x='{{tên biến}}'
  evt='<e (tên sự kiện)=function()> </e>'
  hihi=0;
  text1='';
  a=()=>{
    this.hihi = this.hihi+1;
    if (this.hihi<2) {
      this.text1='Ganyu là vợ tao ?'
    }
    else{
      this.text1=''
      this.hihi=0

    }
  }
  x1 = `<e [(ngModel)='tên dữ liệu cần bind']> </e>`
  pdList:Array<Product> = [{
    name:'Ganyu 1',
    price:1,
    quantity:123
  },
  {
    name:'Ganyu 2',
    price:2,
    quantity:123
  },
  {
    name:'Ganyu 3',
    price:3,
    quantity:123
  }];
  st:Student  = new Student('hihi',1,12.0);
}
