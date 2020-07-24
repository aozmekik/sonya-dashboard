import { Activity } from '../../activity';
import { Component, OnInit, Input } from '@angular/core';
import { Utils } from '../../../../utils/utils.module';
@Component({
    selector: 'ngx-color',
    // template: `<div class="ngx-color-class" style.background-color="#f3000e"> Test </div>`,
    templateUrl: "./row-icon.component.html",
    styleUrls: ['./row-icon.component.scss'],
})
export class RowIconComponent implements OnInit {
    @Input() value: Activity.Type;
    public typeIcon: string;
    public icons: Utils.IHash = {
        [Activity.Type.INCOME]: "arrow-up-c",
        [Activity.Type.OUTGO]: "arrow-down-c",
        [Activity.Type.TRANSFER]: "arrow-swap",
        [Activity.Type.VIRMAN]: "arrow-swap",
    };

    public types = Activity.ActivityTypes;

    constructor() {
        switch (this.value) {
            case Activity.Type.INCOME: this.typeIcon = "arrow-up-c"; break;
            case Activity.Type.OUTGO: this.typeIcon = "arrow-down-c"; break;
            case Activity.Type.VIRMAN:
            case Activity.Type.INCOME: this.typeIcon = "arrow-swap"; break;
        }
    }
    ngOnInit() { }
    public getValue() {
        return Activity.ActivityTypes[this.value];
    }
}