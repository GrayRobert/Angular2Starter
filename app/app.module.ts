/**
 * Created by robertgray on 27/01/2017.
 */

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.component'

@NgModule( {
    imports: [BrowserModule],
    declarations: [EventsAppComponent],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}