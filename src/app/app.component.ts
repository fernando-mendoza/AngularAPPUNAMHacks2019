import { Component, OnInit } from '@angular/core';
import { CallService } from './services/call.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  estado;
  textVal;

  constructor(private callService: CallService){

  }

  ngOnInit(){
   
  }

  getEstados(typeOption: string){
    this.callService.getData(typeOption)
    .subscribe(
      res => {
        console.log(res);
        this.estado = res
        
      },
      //res => console.log(res),
      err => console.log(err)
    )


  }

  submitOption(typeOption: HTMLInputElement){
  this.getEstados(typeOption.value);

  //console.log(typeOption.value)

  typeOption.value = '';
  typeOption.focus();
  return false;
  }

  title = 'Choose one ';
}
