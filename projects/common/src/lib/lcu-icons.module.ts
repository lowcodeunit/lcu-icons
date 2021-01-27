import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuIconsService } from './services/lcu-icons.service';
import { LcuIconsComponent } from './controls/lcu-icons/lcu-icons.component';
import { LcuIconsDirective } from './directives/lcu-icons.directive';

@NgModule({
  declarations: [LcuIconsComponent, LcuIconsDirective],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [LcuIconsComponent, LcuIconsDirective],
  entryComponents: []
})
export class LcuIconsModule {
  static forRoot(): ModuleWithProviders<LcuIconsModule> {
    return {
      ngModule: LcuIconsModule,
      providers: [LcuIconsService]
    };
  }
}
