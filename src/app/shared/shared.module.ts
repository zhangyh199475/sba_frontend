import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const MODULE = [
  CommonModule,
];

const DECLARATIONS = [];
const EXPORT_COMPONENTS = [];
const ENTRYCOMPONENTS = [];


@NgModule({
  imports: [
    ...MODULE,
    ...EXPORT_COMPONENTS,
  ],
  declarations: DECLARATIONS,
  entryComponents: [
    ENTRYCOMPONENTS
  ]
})
export class SharedModule { }
