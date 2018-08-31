import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home/:name', component: HomeComponent,
    children: [
      {
        path: 'gc',
        component: GrandchildComponent
      }
    ]
  },
  { path: 'child', component: ChildComponent },
  { path: 'child/:id',      component: ChildComponent },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PagenotfoundComponent,
    HomeComponent,
    GrandchildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
