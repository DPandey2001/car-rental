// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-about',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <div class="min-h-screen pt-16">
//       <div class="container mx-auto px-4 py-12">
//         <h1 class="text-4xl font-bold text-center mb-8">About Us</h1>
        
//         <!-- Company Introduction -->
//         <div class="bg-white rounded-lg shadow-lg p-8 mb-12">
//           <h2 class="text-2xl font-bold mb-4">Who We Are</h2>
//           <p class="text-gray-700 mb-6">
//             Welcome to CarRental, your trusted partner in providing premium car rental services. With years of experience in the industry, 
//             we pride ourselves on offering a wide selection of well-maintained vehicles and exceptional customer service.
//           </p>
          
//           <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
//           <p class="text-gray-700 mb-6">
//             Our mission is to provide reliable, convenient, and affordable car rental solutions to both individuals and businesses. 
//             We strive to make every rental experience seamless and enjoyable.
//           </p>
//         </div>

//         <!-- Why Choose Us -->
//         <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           <div class="bg-white rounded-lg shadow-lg p-6">
//             <div class="text-primary text-4xl mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <h3 class="text-xl font-bold mb-2">Quality Assured</h3>
//             <p class="text-gray-600">All our vehicles undergo regular maintenance and thorough inspections.</p>
//           </div>

//           <div class="bg-white rounded-lg shadow-lg p-6">
//             <div class="text-primary text-4xl mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <h3 class="text-xl font-bold mb-2">24/7 Support</h3>
//             <p class="text-gray-600">Our customer support team is available round the clock to assist you.</p>
//           </div>

//           <div class="bg-white rounded-lg shadow-lg p-6">
//             <div class="text-primary text-4xl mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//             </div>
//             <h3 class="text-xl font-bold mb-2">Best Rates</h3>
//             <p class="text-gray-600">Competitive pricing with no hidden charges.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   `
// })
// export class AboutComponent {}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen pt-16 bg-grey text-white">
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold text-center mb-8 text-blue-500">About Us</h1>
        
        <!-- Company Introduction -->
        <div class="bg-white text-black rounded-lg shadow-lg p-8 mb-12">
          <h2 class="text-2xl font-bold mb-4">Who We Are</h2>
          <p class="text-gray-800 mb-6">
            Welcome to CarRental, your trusted partner in providing premium car rental services. With years of experience in the industry, 
            we pride ourselves on offering a wide selection of well-maintained vehicles and exceptional customer service.
          </p>
          
          <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
          <p class="text-gray-800 mb-6">
            Our mission is to provide reliable, convenient, and affordable car rental solutions to both individuals and businesses. 
            We strive to make every rental experience seamless and enjoyable.
          </p>
        </div>

        <!-- Why Choose Us -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white text-black rounded-lg shadow-lg p-6">
            <div class="text-blue-500 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Quality Assured</h3>
            <p class="text-gray-600">All our vehicles undergo regular maintenance and thorough inspections.</p>
          </div>

          <div class="bg-white text-black rounded-lg shadow-lg p-6">
            <div class="text-blue-500 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">24/7 Support</h3>
            <p class="text-gray-600">Our customer support team is available round the clock to assist you.</p>
          </div>

          <div class="bg-white text-black rounded-lg shadow-lg p-6">
            <div class="text-blue-500 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2  0 1-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Best Rates</h3>
            <p class="text-gray-600">Competitive pricing with no hidden charges.</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}