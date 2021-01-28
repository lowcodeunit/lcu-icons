import { Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import { LcuIconsManagementState } from './lcu-icons-management.state';
export declare class LcuIconsManagementStateContext extends StateContext<LcuIconsManagementState> {
    protected injector: Injector;
    constructor(injector: Injector);
    GetLcuIconsById(id: number): void;
    protected defaultValue(): LcuIconsManagementState;
    protected loadStateKey(): string;
    protected loadStateName(): string;
}
//# sourceMappingURL=lcu-icons-management-state.context.d.ts.map