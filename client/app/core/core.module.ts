import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoadingService } from './loading.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
  ],
  declarations: [NavComponent],
  exports: [
    NavComponent
  ],
  providers: [
    LoadingService,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
