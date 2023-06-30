import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {
  // @Input() content: string = 'default error msg';
  constructor(@Inject(MAT_DIALOG_DATA) public content: string) { }

  ngOnInit(): void {
  }

}
