import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideosComponent } from './videos/videos.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SectionComponent } from './section/section.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo:'catalog', pathMatch: 'full'},
  { path: 'catalog', component: HomeComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'section/:id', component: SectionComponent},
  { path: 'product/:id', component: ProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
