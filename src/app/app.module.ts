import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Формы
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

//Модальные окна
import { ModalModule, BsModalService } from 'ngx-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/modal.service';

//HTTP запросы
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';

//Компоненты
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadComponent } from './load/load.component';
import { UserService } from './services/user.service';
import { LoadService } from './services/load.service';
import { AdminService } from './services/admin.service';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SectionsComponent } from './sections/sections.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { ArticlesComponent } from './articles/articles.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideosComponent } from './videos/videos.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';
import { SectionComponent } from './section/section.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SatogaService } from './services/satoga.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { ApiInterceptor } from './api.interceptor';
import { DocumentComponent } from './document/document.component';
import { ProgSelectComponent } from './prog-select/prog-select.component';
import { SearchComponent } from './search/search.component';
import { AlertDirective } from './directives/alert.directive';
import { BricksComponent } from './bricks/bricks.component';
import { FileLoaderComponent } from './file-loader/file-loader.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadComponent,
    ModalComponent,
    MenuComponent,
    HomeComponent,
    CatalogComponent,
    SectionsComponent,
    FooterComponent,
    FormComponent,
    ArticlesComponent,
    GalleryComponent,
    VideosComponent,
    ContactsComponent,
    PhotoViewerComponent,
    SectionComponent,
    ProductComponent,
    CarouselComponent,
    SignInComponent,
    AddSectionComponent,
    AddProductComponent,
    AddArticleComponent,
    AddVideoComponent,
    AddPhotoComponent,
    DocumentComponent,
    ProgSelectComponent,
    SearchComponent,
    AlertDirective,
    BricksComponent,
    FileLoaderComponent,
    CatalogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    FormBuilder, 
    HttpClient, 
    ModalService, 
    BsModalService, 
    UserService, 
    LoadService, 
    AdminService, 
    SatogaService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
