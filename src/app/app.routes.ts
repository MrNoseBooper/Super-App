import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'loader',
    loadComponent: () => import('./pages/loader/loader.page').then( m => m.LoaderPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'main',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/main/main.page').then( m => m.MainPage)
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart.page').then( m => m.CartPage)
      },
      {
        path: 'product/:id',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/product-details/product-details.page').then( m => m.ProductDetailsPage)
          },
          {
            path: 'cart',
            loadComponent: () => import('./pages/cart/cart.page').then( m => m.CartPage)
          },
        ],
      }
    ],
  },
];
