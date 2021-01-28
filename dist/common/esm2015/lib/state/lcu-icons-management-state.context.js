import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import * as i0 from "@angular/core";
export class LcuIconsManagementStateContext extends StateContext {
    // Constructors
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    // API Methods
    GetLcuIconsById(id) {
        this.Execute({
            Arguments: {
                LcuIconsId: id
            },
            Type: 'GetLcuIconsById'
        });
    }
    //  Helpers
    defaultValue() {
        return { Loading: true };
    }
    loadStateKey() {
        return 'main';
    }
    loadStateName() {
        return 'lcu-icons';
    }
}
LcuIconsManagementStateContext.ɵprov = i0.ɵɵdefineInjectable({ factory: function LcuIconsManagementStateContext_Factory() { return new LcuIconsManagementStateContext(i0.ɵɵinject(i0.INJECTOR)); }, token: LcuIconsManagementStateContext, providedIn: "root" });
LcuIconsManagementStateContext.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LcuIconsManagementStateContext.ctorParameters = () => [
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGN1LWljb25zLW1hbmFnZW1lbnQtc3RhdGUuY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiJEOi9hLzEvcy9wcm9qZWN0cy9jb21tb24vc3JjLyIsInNvdXJjZXMiOlsibGliL3N0YXRlL2xjdS1pY29ucy1tYW5hZ2VtZW50LXN0YXRlLmNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLDhCQUErQixTQUFRLFlBQXFDO0lBRXJGLGVBQWU7SUFDZixZQUFzQixRQUFrQjtRQUNwQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFERSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBRXhDLENBQUM7SUFHRCxjQUFjO0lBQ1AsZUFBZSxDQUFDLEVBQVU7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFNBQVMsRUFBRTtnQkFDUCxVQUFVLEVBQUUsRUFBRTthQUNqQjtZQUNELElBQUksRUFBRSxpQkFBaUI7U0FDMUIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVc7SUFDRCxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUE2QixDQUFDO0lBQ3hELENBQUM7SUFFUyxZQUFZO1FBQ2xCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFUyxhQUFhO1FBQ25CLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Ozs7WUFoQ0osVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7WUFOb0IsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gJ0BsY3UvY29tbW9uJztcclxuaW1wb3J0IHsgTGN1SWNvbnNNYW5hZ2VtZW50U3RhdGUgfSBmcm9tICcuL2xjdS1pY29ucy1tYW5hZ2VtZW50LnN0YXRlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGN1SWNvbnNNYW5hZ2VtZW50U3RhdGVDb250ZXh0IGV4dGVuZHMgU3RhdGVDb250ZXh0PExjdUljb25zTWFuYWdlbWVudFN0YXRlPiB7XHJcblxyXG4gICAgLy8gQ29uc3RydWN0b3JzXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoaW5qZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy8gQVBJIE1ldGhvZHNcclxuICAgIHB1YmxpYyBHZXRMY3VJY29uc0J5SWQoaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuRXhlY3V0ZSh7XHJcbiAgICAgICAgICAgIEFyZ3VtZW50czoge1xyXG4gICAgICAgICAgICAgICAgTGN1SWNvbnNJZDogaWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgVHlwZTogJ0dldExjdUljb25zQnlJZCdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAgSGVscGVyc1xyXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4geyBMb2FkaW5nOiB0cnVlIH0gYXMgTGN1SWNvbnNNYW5hZ2VtZW50U3RhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBsb2FkU3RhdGVLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ21haW4nO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBsb2FkU3RhdGVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdsY3UtaWNvbnMnO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==