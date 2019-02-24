import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-event',
    template: `
                <ion-row>
                    <ion-col style="background-color: lightgreen" text-center (tap)="onEvent('tab')">Tab</ion-col>
                    <ion-col style="background-color: lightgreen" text-center (press)="onEvent('press')">Press</ion-col>
                </ion-row>
    `
})

export class EventComponent{
    @Output() didevent = new EventEmitter<string>()

    onEvent(Type: string){
        this.didevent.emit(Type);
    }
}