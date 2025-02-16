// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FormService } from '../../services/form.service';
// import { HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-contact',
//   standalone: true,
//   imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
//   template: `
//     <div class="min-h-screen pt-16">
//       <div class="container mx-auto px-4 py-12">
//         <h1 class="text-4xl font-bold text-center mb-8">Contact Us</h1>

//         <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <!-- Contact Information -->
//           <div class="bg-white rounded-lg shadow-lg p-6">
//             <h2 class="text-2xl font-bold mb-6">Get in Touch</h2>
            
//             <div class="space-y-4">
//               <div class="flex items-start">
//                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 <div>
//                   <h3 class="font-semibold">Address</h3>
//                   <p class="text-gray-600">123 Car Rental Street<br/>City, State 12345</p>
//                 </div>
//               </div>

//               <div class="flex items-start">
//                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 <div>
//                   <h3 class="font-semibold">Phone</h3>
//                   <p class="text-gray-600">(555) 123-4567</p>
//                 </div>
//               </div>

//               <div class="flex items-start">
//                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 <div>
//                   <h3 class="font-semibold">Email</h3>
//                   <p class="text-gray-600">info</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <!-- Contact Form -->
//           <div class="bg-white rounded-lg shadow-lg p-6">
//             <h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
            
//             <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
//               <div>
//                 <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                 <input type="text" formControlName="name"
//                        class="w-full p-2 border rounded focus:ring-primary focus:border-primary" 
//                        placeholder="Your Name">
//               </div>

//               <div>
//                 <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input type="email" formControlName="email"
//                        class="w-full p-2 border rounded focus:ring-primary focus:border-primary" 
//                        placeholder="your@email.com">
//               </div>

//               <div>
//                 <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//                 <input type="tel" formControlName="phone"
//                        class="w-full p-2 border rounded focus:ring-primary focus:border-primary" 
//                        placeholder="(555) 123-4567">
//               </div>

//               <div>
//                 <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                 <textarea rows="4" formControlName="message"
//                           class="w-full p-2 border rounded focus:ring-primary focus:border-primary" 
//                           placeholder="Your message..."></textarea>
//               </div>

//               <div *ngIf="submitMessage" 
//                    [class]="submitSuccess ? 'text-green-600' : 'text-red-600'"
//                    class="mt-2">
//                 {{ submitMessage }}
//               </div>

//               <button type="submit" 
//                       [disabled]="!contactForm.valid || isSubmitting"
//                       class="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition duration-300 disabled:opacity-50">
//                 {{ isSubmitting ? 'Sending...' : 'Send Message' }}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   `
// })
// export class ContactComponent {
//   contactForm: FormGroup;
//   isSubmitting = false;
//   submitMessage = '';
//   submitSuccess = false;

//   constructor(
//     private fb: FormBuilder,
//     private formService: FormService
//   ) {
//     this.contactForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', Validators.required],
//       message: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.contactForm.valid && !this.isSubmitting) {
//       this.isSubmitting = true;
//       this.submitMessage = '';

//       this.formService.submitContactForm(this.contactForm.value).subscribe({
//         next: (response) => {
//           this.submitSuccess = true;
//           this.submitMessage = 'Message sent successfully!';
//           this.contactForm.reset();
//         },
//         error: (error) => {
//           this.submitSuccess = false;
//           this.submitMessage = 'Failed to send message. Please try again.';
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
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <div class="min-h-screen pt-16 bg-grey text-white">
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold text-center mb-8 text-blue-500">Contact Us</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Contact Information -->
          <div class="bg-white text-black rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 class="font-semibold">Address</h3>
                  <p class="text-gray-600">123 Car Rental Street<br/>City, State 12345</p>
                </div>
              </div>

              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 class="font-semibold">Phone</h3>
                  <p class="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
 <div>
                  <h3 class="font-semibold">Email</h3>
                  <p class="text-gray-600">info</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white text-black rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-800 mb-1">Name</label>
                <input type="text" formControlName="name"
                       class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500" 
                       placeholder="Your Name">
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-800 mb-1">Email</label>
                <input type="email" formControlName="email"
                       class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500" 
                       placeholder="your@email.com">
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-800 mb-1">Phone</label>
                <input type="tel" formControlName="phone"
                       class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500" 
                       placeholder="(555) 123-4567">
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-800 mb-1">Message</label>
                <textarea rows="4" formControlName="message"
                          class="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500" 
                          placeholder="Your message..."></textarea>
              </div>

              <div *ngIf="submitMessage" 
                   [class]="submitSuccess ? 'text-green-600' : 'text-red-600'"
                   class="mt-2">
                {{ submitMessage }}
              </div>

              <button type="submit" 
                      [disabled]="!contactForm.valid || isSubmitting"
                      class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 disabled:opacity-50">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(
    private fb: FormBuilder,
    private formService: FormService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = '';

      this.formService.submitContactForm(this.contactForm.value).subscribe({
        next: (response) => {
          this.submitSuccess = true;
          this.submitMessage = 'Message sent successfully!';
          this.contactForm.reset();
        },
        error: (error) => {
          this.submitSuccess = false;
          this.submitMessage = 'Failed to send message. Please try again.';
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
}