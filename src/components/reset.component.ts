import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-reset',
    template: `
        <ion-row>
            <ion-col>
                <button ion-button color="danger" small block (click)="onReset('all')">Reset All</button>
            </ion-col>
            <ion-col>
                <button ion-button color="danger" small block (click)="onReset('tap')">Reset Tap</button>
            </ion-col>
            <ion-col>
                <button ion-button color="danger" small block (click)="onReset('press')">Reset Press</button>
            </ion-col>
        </ion-row>
    `
})
export class ResetComponent{
    // Emit means 發射, @output which tells you this property(屬性) actullay is an event and you should be able to listen
    // 當子指令需將值傳遞給父指令時，子指令可以創建一個EventEmitter物件(需宣告欲傳值得屬性)，父指令可以用(eventName)將值接回來。
    @Output() didreset = new EventEmitter<string>(); // eventName : didreset

    onReset(type: string){
        this.didreset.emit(type);
    }
}