import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SobrePageRoutingModule } from './sobre-routing.module';
import { SobrePage } from './sobre.page'; // Importação do componente

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobrePageRoutingModule,
    SobrePage // <--- O SobrePage deve ficar AQUI nos imports agora
  ],
  declarations: [] // <--- Deixe as declarations VAZIAS
})
export class SobrePageModule {}