// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [RouterModule, CommonModule],
//   template: `
//     <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
//       <div class="container mx-auto px-4">
//         <div class="flex justify-between items-center h-16">
//           <div class="flex items-center">
//             <a routerLink="/" class="text-xl font-bold text-primary">CarRental</a>
//           </div>
          
//           <!-- Desktop Menu -->
//           <div class="hidden md:flex items-center space-x-8">
//             <a routerLink="/" class="text-gray-700 hover:text-primary">Home</a>
//             <a routerLink="/about" class="text-gray-700 hover:text-primary">About</a>
//             <a routerLink="/services" class="text-gray-700 hover:text-primary">Services</a>
//             <a routerLink="/contact" class="text-gray-700 hover:text-primary">Contact</a>
//             <a routerLink="/query" class="text-gray-700 hover:text-primary">Query</a>
//           </div>

//           <!-- Mobile Menu Button -->
//           <div class="md:hidden flex items-center">
//             <button (click)="toggleMenu()" class="text-gray-700">
//               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
//               </svg>
//             </button>
//           </div>
//         </div>

//         <!-- Mobile Menu -->
//         <div [class.hidden]="!isMenuOpen" class="md:hidden">
//           <div class="px-2 pt-2 pb-3 space-y-1">
//             <a routerLink="/" class="block px-3 py-2 text-gray-700 hover:text-primary">Home</a>
//             <a routerLink="/about" class="block px-3 py-2 text-gray-700 hover:text-primary">About</a>
//             <a routerLink="/services" class="block px-3 py-2 text-gray-700 hover:text-primary">Services</a>
//             <a routerLink="/contact" class="block px-3 py-2 text-gray-700 hover:text-primary">Contact</a>
//             <a routerLink="/query" class="block px-3 py-2 text-gray-700 hover:text-primary">Query</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   `
// })
// export class NavbarComponent {
//   isMenuOpen = false;

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }
// }


import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="bg-black shadow-lg fixed w-full top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <a routerLink="/" class="text-xl font-bold text-blue-500">CarRental</a>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/" class="text-white hover:text-blue-500">Home</a>
            <a routerLink="/about" class="text-white hover:text-blue-500">About</a>
            <a routerLink="/services" class="text-white hover:text-blue-500">Services</a>
            <a routerLink="/contact" class="text-white hover:text-blue-500">Contact</a>
            <a routerLink="/query" class="text-white hover:text-blue-500">Query</a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button (click)="toggleMenu()" class="text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div [class.hidden]="!isMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a routerLink="/" class="block px-3 py-2 text-white hover:text-blue-500">Home</a>
            <a routerLink="/about" class="block px-3 py-2 text-white hover:text-blue-500">About</a>
            <a routerLink="/services" class="block px-3 py-2 text-white hover:text-blue-500">Services</a>
            <a routerLink="/contact" class="block px-3 py-2 text-white hover:text-blue-500">Contact</a>
            <a routerLink="/query" class="block px-3 py-2 text-white hover:text-blue-500">Query</a>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}