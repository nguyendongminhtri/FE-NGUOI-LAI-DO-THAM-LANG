import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./form_login/register/register.component";
import {LoginComponent} from "./form_login/login/login.component";
import {ChangeAvatarComponent} from "./form_login/change-avatar/change-avatar.component";
import {PageCategoryComponent} from "./content/category/page-category/page-category.component";
import {CreateCategoryComponent} from "./content/category/create-category/create-category.component";
import {CreateSingerComponent} from "./content/singer/create-singer/create-singer.component";
import {PageSingerComponent} from "./content/singer/page-singer/page-singer.component";
import {PageSongComponent} from "./content/song/page-song/page-song.component";
import {CreateSongComponent} from "./content/song/create-song/create-song.component";
import {DetailSongComponent} from "./content/song/detail-song/detail-song.component";
import {DetailSingerComponent} from "./content/singer/detail-singer/detail-singer.component";
import {MyplaylistComponent} from "./content/playlist/myplaylist/myplaylist.component";
import {CreatePlaylistComponent} from "./content/playlist/create-playlist/create-playlist.component";
import {DetailPlaylistComponent} from "./content/playlist/detail-playlist/detail-playlist.component";
import {ListSongComponent} from "./content/song/list-song/list-song.component";
import {PageSearchComponent} from "./content/page-search/page-search.component";
import {TopTrendingComponent} from "./content/song/top-trending/top-trending.component";
import {CheckLoginGuard} from "./service/CheckLoginGuard";
import {PageAlbumComponent} from "./content/album/page-album/page-album.component";
import {CreateAlbumComponent} from "./content/album/create-album/create-album.component";

import {DetailAlbumComponent} from "./content/album/detail-album/detail-album.component";
import {DetailCategoryComponent} from "./content/category/detail-category/detail-category.component";
import {CheckLogOutGuard} from "./service/CheckLogOutGuard";



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register' ,component: RegisterComponent, canActivate:[CheckLoginGuard]},
  {path: 'login' ,component:LoginComponent, canActivate:[CheckLoginGuard]},
  {path:'change-avatar',component:ChangeAvatarComponent, canActivate: [CheckLogOutGuard]},

  {path:'category',component:PageCategoryComponent},
  {path:'create-category',component:CreateCategoryComponent},
  {path:'detail-category/:id',component:DetailCategoryComponent},

  {path:'singer',component:PageSingerComponent},
  {path:'create-singer',component:CreateSingerComponent},
  {path:'detail-singer/:id',component:DetailSingerComponent},

  {path:'song',component:PageSongComponent},
  {path:'create-song',component:CreateSongComponent},
  {path:'detail-song/:id',component:DetailSongComponent},
  {path:'list-song',component:ListSongComponent},

  {path:'playlist',component:MyplaylistComponent, canActivate: [CheckLogOutGuard]},
  {path:'create-playlist',component:CreatePlaylistComponent},
  {path:'detail-playlist/:id',component:DetailPlaylistComponent},

  {path:'search', component: PageSearchComponent},

  {path:'topTrending',component:TopTrendingComponent},
  {path: 'album', component: PageAlbumComponent},
  {path: 'create-album', component: CreateAlbumComponent},
  {path: 'detail-album/:id', component: DetailAlbumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
