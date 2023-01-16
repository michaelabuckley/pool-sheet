import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { PoolSheetComponent } from './pool-sheet/pool-sheet.component';
import { BoutBlockComponent } from './bout-block/bout-block.component';
import { TwoPageComponent } from './two-page/two-page.component';
import { BoutOrdersComponent } from './bout-orders/bout-orders.component';
import { HitGridComponent } from './hit-grid/hit-grid.component';
import { PoolSheetHeaderComponent } from './pool-sheet-header/pool-sheet-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
    PoolSheetComponent,
    BoutBlockComponent,
    TwoPageComponent,
    BoutOrdersComponent,
    HitGridComponent,
    PoolSheetHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
