import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuprins',
  templateUrl: './cuprins.component.html',
  styleUrls: ['./cuprins.component.scss']
})
export class CuprinsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  scrollClicked(pageSection: string): void {
    let element = document.getElementById(pageSection);
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  }

}
