import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //recuperando uma informação que tá sendo passada na URL - http://localhost:4200/portifolio/1
  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
    ) {

    this.parametrizador.params.subscribe(
      res => console.log(res)
    )
      //Parametro de rota filha
    this.parametrizador.firstChild?.params.subscribe(
      res => console.log(res)
    )

    //para recuperar a queryparams, após a interrogação - http://localhost:4200/portifolio/1?name=flavio&token=123
    this.parametrizador.queryParams.subscribe(
      res => console.log(res)
    )
   }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegador.navigate(['/'])
    // }, 5000)
  }

}
