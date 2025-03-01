import {NgModule} from '@angular/core';
import { CountersComponent } from './counters/counters.component';

@NgModule({
  declarations: [CountersComponent],
  exports: [CountersComponent]
})
export class CountersModule { }
