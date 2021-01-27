import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import { LcuIconsManagementState } from './lcu-icons-management.state';

@Injectable({
    providedIn: 'root'
})
export class LcuIconsManagementStateContext extends StateContext<LcuIconsManagementState> {

    // Constructors
    constructor(protected injector: Injector) {
        super(injector);
    }

    
    // API Methods
    public GetLcuIconsById(id: number): void {
        this.Execute({
            Arguments: {
                LcuIconsId: id
            },
            Type: 'GetLcuIconsById'
        });
    }

    //  Helpers
    protected defaultValue() {
        return { Loading: true } as LcuIconsManagementState;
    }
    
    protected loadStateKey(): string {
        return 'main';
    }

    protected loadStateName(): string {
        return 'lcu-icons';
    }
}
