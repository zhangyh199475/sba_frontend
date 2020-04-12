import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule) {
      if (parentModule) {
        throw new Error('Coremodule 已经装载，请仅在AppModule中引入该模块。');
      }
    }

 }
