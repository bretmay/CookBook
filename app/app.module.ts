import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'passengers', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    // Custom Modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}