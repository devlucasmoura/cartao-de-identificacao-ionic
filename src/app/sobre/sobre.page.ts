import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Adicione esta linha

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true, // Garanta que isso esteja como TRUE
  imports: [IonicModule] // Adicione o IonicModule aqui também
})
export class SobrePage implements OnInit {
  constructor() { }
  ngOnInit() { }
}