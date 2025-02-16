// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FormService } from '../../services/form.service';
// import { HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-query',
//   standalone: true,
//   imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
//   template: `
//     <div class="min-h-screen pt-16">
//       <div class="container mx-auto px-4 py-12">
//         <h1 class="text-4xl font-bold text-center mb-8">Vehicle Query Form</h1>

//         <div class="max-w-3xl mx-auto">
//           <div class="bg-white rounded-lg shadow-lg p-6">
//             <form [formGroup]="queryForm" (ngSubmit)="onSubmit()" class="space-y-6">
//               <!-- Personal Information -->
//               <div class="space-y-4">
//                 <h2 class="text-xl font-bold mb-4">Personal Information</h2>
                
//                 <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//                     <input type="text" formControlName="firstName" 
//                            class="w-full p-2 border rounded focus:ring-primary focus:border-primary">
//                   </div>

//                   <div>
//                     <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//                     <input type="text" formControlName="lastName" 
//                            class="w-full p-2 border rounded focus:ring-primary focus:border-primary">
//                   </div>
//                 </div>

//                 <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                     <input type="email" formControlName="email" 
//                            class="w-full p-2 border rounded focus:ring-primary focus:border-primary">
//                   </div>

//                   <div>
//                     <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//                     <input type="tel" formControlName="phone" 
//                            class="w-full p-2 border rounded focus:ring-primary focus:border-primary">
//                   </div>
//                 </div>
//               </div>

//               <!-- Vehicle Requirements -->
//               <div class="space-y-4">
//                 <h2 class="text-xl font-bold mb-4">Vehicle Requirements</h2>
                
//                 <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label class="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
//                     <select formControlName="vehicleType" 
//                             class="w-full p-2 border rounded focus:ring-primary focus:border-primary">
//                       <option value="">Select Vehicle Type</option>
//                       <option value="sedan">Sedan</option>
//                       <option value="suv">SUV</option>
//                       <option value="luxury">Luxury</option>
//                       <option value="van">Van</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label class="block text-sm font-medium text-gray-700 mb-1">Rental Duration</label>
//                     <select formControlName="rentalDuration" 
//                             class="w-full p-2 border rounded focus:ring-primary focus:border-primary">
//                       <option value="">Select Duration</option>
//                       <option value="daily">Daily</option>
//                       <option value="weekly">Weekly</option>
//                       <option value="monthly">Monthly</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label class="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
//                     <input type="date" formControlName="pickupDate" 
//                            class="w-full p-2 border rounded focus:ring-primary focus:border-primary">
//                   </div>

//                   <div>
//                     <label class="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
//                     <input type="date" formControlName="returnDate" 
//                            class="w-full p-2 border rounded focus:ring-primary focus:border-primary">
//                   </div>
//                 </div>
//               </div>

//               <!-- Additional Requirements -->
//               <div class="space-y-4">
//                 <h2 class="text-xl font-bold mb-4">Additional Requirements</h2>
                
//                 <div>
//                   <label class="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
//                   <textarea formControlName="specialRequests" rows="4" 
//                             class="w-full p-2 border rounded focus:ring-primary focus:border-primary"
//                             placeholder="Any special requirements or preferences..."></textarea>
//                 </div>
//               </div>

//               <div *ngIf="submitMessage" 
//                    [class]="submitSuccess ? 'text-green-600' : 'text-red-600'"
//                    class="mt-2">
//                 {{ submitMessage }}
//               </div>

//               <button type="submit" 
//                       [disabled]="!queryForm.valid || isSubmitting"
//                       class="w-full bg-primary text-white py-3 px-4 rounded hover:bg-secondary transition duration-300 disabled:opacity-50">
//                 {{ isSubmitting ? 'Submitting...' : 'Submit Query' }}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   `
// })
// export class QueryComponent {
//   queryForm: FormGroup;
//   isSubmitting = false;
//   submitMessage = '';
//   submitSuccess = false;

//   constructor(
//     private fb: FormBuilder,
//     private formService: FormService
//   ) {
//     this.queryForm = this.fb.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', Validators.required],
//       vehicleType: ['', Validators.required],
//       rentalDuration: ['', Validators.required],
//       pickupDate: ['', Validators.required],
//       returnDate: ['', Validators.required],
//       specialRequests: ['']
//     });
//   }

//   onSubmit() {
//     if (this.queryForm.valid && !this.isSubmitting) {
//       this.isSubmitting = true;
//       this.submitMessage = '';

//       this.formService.submitQueryForm(this.queryForm.value).subscribe({
//         next: (response) => {
//           this.submitSuccess = true;
//           this.submitMessage = 'Query submitted successfully!';
//           this.queryForm.reset();
//         },
//         error: (error) => {
//           this.submitSuccess = false;
//           this.submitMessage = 'Failed to submit query. Please try again.';
//         },
//         complete: () => {
//           this.isSubmitting = false;
//         }
//       });
//     }
//   }
// }




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <div class="min-h-screen pt-16 bg-grey text-white">
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold text-center mb-8 text-blue-500">Vehicle Query Form</h1>

        <div class="max-w-3xl mx-auto">
          <div class="bg-white text-black rounded-lg shadow-lg p-6">
            <form [formGroup]="queryForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <!-- Personal Information -->
              <div class="space-y-4">
                <h2 class="text-xl font-bold mb-4">Personal Information</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-800 mb-1">First Name</label>
                    <input type="text" formControlName="firstName" 
                           class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500">
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-800 mb-1">Last Name</label>
                    <input type="text" formControlName="lastName" 
                           class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-800 mb-1">Email</label>
                    <input type="email" formControlName="email" 
                           class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500">
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-800 mb-1">Phone</label>
                    <input type="tel" formControlName="phone" 
                           class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500">
                  </div>
                </div>
              </div>

              <!-- Vehicle Requirements -->
              <div class="space-y-4">
                <h2 class="text-xl font-bold mb-4">Vehicle Requirements</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-800 mb-1">Vehicle Type</label>
                    <select formControlName="vehicleType" 
                            class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select Vehicle Type</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="luxury">Luxury</option>
                      <option value="van">Van</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-800 mb-1">Rental Duration</label>
                    <select formControlName="rentalDuration" 
                            class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select Duration</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-800 mb-1">Pickup Date</label>
                    <input type="date" formControlName="pickupDate" 
                           class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500">
                  </div >
                  <div>
                    <label class="block text-sm font-medium text-gray-800 mb-1">Return Date</label>
                    <input type="date" formControlName="returnDate" 
                           class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500">
                  </div>
                </div>
              </div>

              <!-- Additional Requirements -->
              <div class="space-y-4">
                <h2 class="text-xl font-bold mb-4">Additional Requirements</h2>
                
                <div>
                  <label class="block text-sm font-medium text-gray-800 mb-1">Special Requests</label>
                  <textarea formControlName="specialRequests" rows="4" 
                            class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Any special requirements or preferences..."></textarea>
                </div>
              </div>

              <div *ngIf="submitMessage" 
                   [class]="submitSuccess ? 'text-green-600' : 'text-red-600'"
                   class="mt-2">
                {{ submitMessage }}
              </div>

              <button type="submit" 
                      [disabled]="!queryForm.valid || isSubmitting"
                      class="w-full bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 transition duration-300 disabled:opacity-50">
                {{ isSubmitting ? 'Submitting...' : 'Submit Query' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class QueryComponent {
  queryForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(
    private fb: FormBuilder,
    private formService: FormService
  ) {
    this.queryForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      vehicleType: ['', Validators.required],
      rentalDuration: ['', Validators.required],
      pickupDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      specialRequests: ['']
    });
  }

  onSubmit() {
    if (this.queryForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = '';

      this.formService.submitQueryForm(this.queryForm.value).subscribe({
        next: (response) => {
          this.submitSuccess = true;
          this.submitMessage = 'Query submitted successfully!';
          this.queryForm.reset();
        },
        error: (error) => {
          this.submitSuccess = false;
          this.submitMessage = 'Failed to submit query. Please try again.';
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
}