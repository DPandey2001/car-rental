// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-services',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <div class="min-h-screen pt-16">
//       <div class="container mx-auto px-4 py-12">
//         <h1 class="text-4xl font-bold text-center mb-8">Our Services</h1>

//         <!-- Services Grid -->
//         <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <!-- Short Term Rental -->
//           <div class="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div class="p-6">
//               <h3 class="text-2xl font-bold mb-4">Short Term Rental</h3>
//               <p class="text-gray-600 mb-4">
//                 Perfect for weekend getaways or business trips. Choose from our wide range of vehicles 
//                 for your short-term needs.
//               </p>
//               <ul class="list-disc list-inside text-gray-600 mb-4">
//                 <li>Flexible pickup and return times</li>
//                 <li>24/7 roadside assistance</li>
//                 <li>Comprehensive insurance options</li>
//                 <li>No hidden charges</li>
//               </ul>
//             </div>
//           </div>

//           <!-- Long Term Rental -->
//           <div class="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div class="p-6">
//               <h3 class="text-2xl font-bold mb-4">Long Term Rental</h3>
//               <p class="text-gray-600 mb-4">
//                 Ideal for extended trips or business needs. Enjoy special rates and benefits with our 
//                 long-term rental options.
//               </p>
//               <ul class="list-disc list-inside text-gray-600 mb-4">
//                 <li>Discounted monthly rates</li>
//                 <li>Regular maintenance included</li>
//                 <li>Flexible vehicle swap options</li>
//                 <li>Priority customer support</li>
//               </ul>
//             </div>
//           </div>

//           <!-- Corporate Rental -->
//           <div class="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div class="p-6">
//               <h3 class="text-2xl font-bold mb-4">Corporate Rental</h3>
//               <p class="text-gray-600 mb-4">
//                 Tailored solutions for businesses. Manage your company's transportation needs efficiently.
//               </p>
//               <ul class="list-disc list-inside text-gray-600 mb-4">
//                 <li>Corporate account management</li>
//                 <li>Customized billing options</li>
//                 <li>Fleet management services</li>
//                 <li>Volume discounts</li>
//               </ul>
//             </div>
//           </div>

//           <!-- Luxury Rental -->
//           <div class="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div class="p-6">
//               <h3 class="text-2xl font-bold mb-4">Luxury Rental</h3>
//               <p class="text-gray-600 mb-4">
//                 Experience luxury and comfort with our premium vehicle collection.
//               </p>
//               <ul class="list-disc list-inside text-gray-600 mb-4">
//                 <li>Premium vehicle selection</li>
//                 <li>Chauffeur service available</li>
//                 <li>VIP customer support</li>
//                 <li>Special event packages</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `
// })
// export class ServicesComponent {}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen pt-16 bg-grey text-white">
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold text-center mb-8 text-blue-500">Our Services</h1>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Short Term Rental -->
          <div class="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-4">Short Term Rental</h3>
              <p class="text-gray-800 mb-4">
                Perfect for weekend getaways or business trips. Choose from our wide range of vehicles 
                for your short-term needs.
              </p>
              <ul class="list-disc list-inside text-gray-800 mb-4">
                <li>Flexible pickup and return times</li>
                <li>24/7 roadside assistance</li>
                <li>Comprehensive insurance options</li>
                <li>No hidden charges</li>
              </ul>
            </div>
          </div>

          <!-- Long Term Rental -->
          <div class="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-4">Long Term Rental</h3>
              <p class="text-gray-800 mb-4">
                Ideal for extended trips or business needs. Enjoy special rates and benefits with our 
                long-term rental options.
              </p>
              <ul class="list-disc list-inside text-gray-800 mb-4">
                <li>Discounted monthly rates</li>
                <li>Regular maintenance included</li>
                <li>Flexible vehicle swap options</li>
                <li>Priority customer support</li>
              </ul>
            </div>
          </div>

          <!-- Corporate Rental -->
          <div class="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-4">Corporate Rental</h3>
              <p class="text-gray-800 mb-4">
                Tailored solutions for businesses. Manage your company's transportation needs efficiently.
              </p>
              <ul class="list-disc list-inside text-gray-800 mb-4">
                <li>Corporate account management</li>
                <li>Customized billing options</li>
                <li>Fleet management services</li>
                <li>Volume discounts</li>
              </ul>
            </div>
          </div>

          <!-- Luxury Rental -->
          <div class="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-4">Luxury Rental</h3>
              <p class="text-gray-800 mb-4">
                Experience luxury and comfort with our premium vehicle collection.
              </p>
              <ul class="list-disc list-inside text-gray-800 mb-4">
                <li>Premium vehicle selection</li>
                <li>Chauffeur service available</li>
                <li>VIP customer support</li>
                <li>Special event packages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ServicesComponent {}