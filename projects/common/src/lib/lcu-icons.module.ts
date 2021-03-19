import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuIconsService } from './services/lcu-icons.service';
import { LcuIconsComponent } from './controls/lcu-icons/lcu-icons.component';
import { LcuIconsDirective } from './directives/lcu-icons.directive';
import { SvgToMatIconService } from './services/icons/svg-to-mat-icon.service';
import { MatIconRegistry } from '@angular/material/icon';

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
      providers: [LcuIconsService, SvgToMatIconService, MatIconRegistry]
    };
  }
}
