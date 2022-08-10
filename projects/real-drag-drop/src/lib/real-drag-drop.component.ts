import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-real-drag-drop',
  templateUrl: './real-drag-drop-component.html',
  styleUrls: ['./real-drag-drop.component.scss']
})
export class RealDragDropComponent implements OnInit {

  @Input() borderColor: string = '#000000';
  @Input() borderStyle: 'solid' | 'dashed' | 'dotted' | 'none' = 'solid';
  @Input() borderSize: number = 1;

  @Output() filesCallback: EventEmitter<File[]> = new EventEmitter<File[]>;

  constructor() { }

  ngOnInit(): void {
  }

  onFileDropped(eventFiles: File[]): void {
    this.filesCallback.emit(eventFiles);
  }
}
