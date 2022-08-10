import { NgModule } from '@angular/core';
import { RealDragDropComponent } from './real-drag-drop.component';
import { DragDropEventsDirective } from './drag-drop-events.directive';



@NgModule({
  declarations: [
    RealDragDropComponent,
    DragDropEventsDirective
  ],
  imports: [
  ],
  exports: [
    RealDragDropComponent
  ]
})
export class RealDragDropModule { }
