import { NgModule } from '@angular/core';
import { MultiselectComponent } from './multiselect.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [MultiselectComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [MultiselectComponent]
})
export class MultiselectModule { }
