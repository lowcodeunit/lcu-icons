import { OnInit, EventEmitter } from '@angular/core';
import { LcuIconsModel } from '../../models/lcu-icons.model';
export declare class LcuIconsComponent implements OnInit {
    card: LcuIconsModel;
    cardSelected: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    SelectCard(url?: string): void;
}
//# sourceMappingURL=lcu-icons.component.d.ts.map