import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';

// Modules
import { AppRoutingModule } from './modules/app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        LayoutComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
