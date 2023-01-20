import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'product-form',
    loadChildren: () => import('./product-form/product-form.module').then( m => m.ProductFormPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'edit-product/:id',
    loadChildren: () => import('./edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'one-product/:id',
    loadChildren: () => import('./one-product/one-product.module').then( m => m.OneProductPageModule)
  },  {
    path: 'edit-categories',
    loadChildren: () => import('./edit-categories/edit-categories.module').then( m => m.EditCategoriesPageModule)
  },
  {
    path: 'category-list',
    loadChildren: () => import('./category-list/category-list.module').then( m => m.CategoryListPageModule)
  },
  {
    path: 'category-form',
    loadChildren: () => import('./category-form/category-form.module').then( m => m.CategoryFormPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
