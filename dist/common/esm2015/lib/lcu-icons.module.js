import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuIconsService } from './services/lcu-icons.service';
import { LcuIconsComponent } from './controls/lcu-icons/lcu-icons.component';
import { LcuIconsDirective } from './directives/lcu-icons.directive';
import { SvgToMatIconService } from './services/icons/svg-to-mat-icon.service';
export class LcuIconsModule {
    static forRoot() {
        return {
            ngModule: LcuIconsModule,
            providers: [LcuIconsService, SvgToMatIconService]
        };
    }
}
LcuIconsModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LWljb25zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9hLzEvcy9wcm9qZWN0cy9jb21tb24vc3JjLyIsInNvdXJjZXMiOlsibGliL2xjdS1pY29ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBYy9FLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQztTQUNsRCxDQUFDO0lBQ0osQ0FBQzs7O1lBbEJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztnQkFDcEQsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztnQkFDL0MsZUFBZSxFQUFFLEVBQUU7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuaW1wb3J0IHsgRmF0aHltU2hhcmVkTW9kdWxlLCBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0BsY3UvY29tbW9uJztcclxuaW1wb3J0IHsgTGN1SWNvbnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sY3UtaWNvbnMuc2VydmljZSc7XHJcbmltcG9ydCB7IExjdUljb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9scy9sY3UtaWNvbnMvbGN1LWljb25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExjdUljb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2xjdS1pY29ucy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTdmdUb01hdEljb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pY29ucy9zdmctdG8tbWF0LWljb24uc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0xjdUljb25zQ29tcG9uZW50LCBMY3VJY29uc0RpcmVjdGl2ZV0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRmF0aHltU2hhcmVkTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgRmxleExheW91dE1vZHVsZSxcclxuICAgIE1hdGVyaWFsTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTGN1SWNvbnNDb21wb25lbnQsIExjdUljb25zRGlyZWN0aXZlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMY3VJY29uc01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxMY3VJY29uc01vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IExjdUljb25zTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtMY3VJY29uc1NlcnZpY2UsIFN2Z1RvTWF0SWNvblNlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=