import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreConfig, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';

import { countryReducer } from './store/countryReducer';

const initialState = {
  id: 0,
  name: '',
  states: []
}
const storeConfig: StoreConfig<any, any> = {
  initialState: {
    country: initialState
  },
  metaReducers: []
}

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ country: countryReducer }, storeConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
