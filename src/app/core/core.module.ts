import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { TreeViewErrorHandlerService } from './services';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
  ],
  providers: [
    { provide: ErrorHandler, useExisting: TreeViewErrorHandlerService }
  ]
})
export class CoreModule { }
