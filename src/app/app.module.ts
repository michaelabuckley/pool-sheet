import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { PoolSheetComponent } from './pool-sheet/pool-sheet.component';
import { BoutBlockComponent } from './bout-block/bout-block.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
    PoolSheetComponent,
    BoutBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
