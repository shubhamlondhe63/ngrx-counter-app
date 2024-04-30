import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from '../store/reducers';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OtherComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
