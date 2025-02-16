import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,  ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: 
  `<section class="relative h-[600px] lg:h-[700px] bg-cover bg-center" style="background-image: url('https://public.readdy.ai/ai/img_res/7826e0d35b475b5e6031a7e9e827ea79.jpg')">
<div class="absolute inset-0 bg-black bg-opacity-30"></div>
<div class="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
<h1 class="text-4xl lg:text-6xl font-bold mb-6">Premium Car Rental Experience</h1>
<p class="text-xl lg:text-2xl mb-12 max-w-3xl">Discover our exclusive collection of luxury vehicles for any occasion. Book your dream car today.</p>
<div class="w-full max-w-4xl search-container rounded-lg p-6">
<form  [formGroup]="carRentalForm"  (ngSubmit)="onSubmit()">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="relative">
      <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <i class="ri-map-pin-line text-gray-400"></i>
      </div>
      
      <select name="location"  formControlName="location"  class="w-full pl-10 pr-4 py-3 bg-white rounded !rounded-button border-none text-gray-900"
   [ngClass]="{'is-invalid': carRentalForm.get('location')?.invalid && (carRentalForm.get('location')?.dirty || carRentalForm.get('location')?.touched)}">
        <option value="">Select Location</option>
        <option value="ny">Delhi</option>
        <option value="la">Gurugram</option>
        <option value="ch">Noida</option>
        <option value="mi">Dehradun</option>
      </select>
    </div>
    <div class="relative">
      <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <i class="ri-calendar-line text-gray-400"></i>
      </div>
      <input type="date" name="startDate" formControlName="startDate" class="w-full pl-10 pr-4 py-3 bg-white rounded !rounded-button border-none text-gray-900 date-input"
   [ngClass]="{'is-invalid': carRentalForm.get('startDate')?.invalid && (carRentalForm.get('startDate')?.dirty || carRentalForm.get('startDate')?.touched)}">
    </div>
    <div class="relative">
      <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <i class="ri-calendar-line text-gray-400"></i>
      </div>
      <input type="date" name="endDate" formControlName="endDate" class="w-full pl-10 pr-4 py-3 bg-white rounded !rounded-button border-none text-gray-900 date-input"
   [ngClass]="{'is-invalid': carRentalForm.get('endDate')?.invalid && (carRentalForm.get('endDate')?.dirty || carRentalForm.get('endDate')?.touched)}">
    </div>
    <button type="submit" class="w-full py-3 bg-primary text-white font-medium !rounded-button hover:bg-opacity-90 transition-colors">
      Search Cars
    </button>
  </div>
</form>
</div>
</div>
</section>
<section class="py-16 lg:py-24 bg-gray-50">
<div class="container mx-auto px-4">
<div class="text-center mb-12">
<h2 class="text-3xl lg:text-4xl font-bold mb-4">Featured Vehicles</h2>
<p class="text-gray-600 max-w-2xl mx-auto">Choose from our selection of premium vehicles for your next journey</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div class="aspect-w-16 aspect-h-9">
<img src="https://public.readdy.ai/ai/img_res/d4ae00693f8097e33f1b7044bc1571cf.jpg" alt="Mercedes S-Class" class="w-full h-full object-cover">
</div>
<div class="p-6">
<div class="flex justify-between items-start mb-4">
<div>
<h3 class="text-xl font-semibold mb-2">Mercedes-Benz S-Class</h3>
<p class="text-gray-600">2025 Model</p>
</div>
<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Available</span>
</div>
<div class="flex justify-between items-center mb-6">
<div class="flex items-center space-x-4">
<div class="flex items-center">
<i class="ri-user-line mr-2 text-gray-400"></i>
<span>5 Seats</span>
</div>
<div class="flex items-center">
<i class="ri-settings-line mr-2 text-gray-400"></i>
<span>Automatic</span>
</div>
</div>
</div>
<div class="flex justify-between items-center">
<div class="text-primary font-semibold text-xl">$299/day</div>
<button class="px-4 py-2 bg-primary text-white !rounded-button hover:bg-opacity-90 transition-colors">Book Now</button>
</div>
</div>
</div>
<div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div class="aspect-w-16 aspect-h-9">
<img src="https://public.readdy.ai/ai/img_res/2a00a36f56ef33845dca65f9358f7d2e.jpg" alt="BMW 7 Series" class="w-full h-full object-cover">
</div>
<div class="p-6">
<div class="flex justify-between items-start mb-4">
<div>
<h3 class="text-xl font-semibold mb-2">BMW 7 Series</h3>
<p class="text-gray-600">2025 Model</p>
</div>
<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Available</span>
</div>
<div class="flex justify-between items-center mb-6">
<div class="flex items-center space-x-4">
<div class="flex items-center">
<i class="ri-user-line mr-2 text-gray-400"></i>
<span>5 Seats</span>
</div>
<div class="flex items-center">
<i class="ri-settings-line mr-2 text-gray-400"></i>
<span>Automatic</span>
</div>
</div>
</div>
<div class="flex justify-between items-center">
<div class="text-primary font-semibold text-xl">$279/day</div>
<button class="px-4 py-2 bg-primary text-white !rounded-button hover:bg-opacity-90 transition-colors">Book Now</button>
</div>
</div>
</div>
<div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div class="aspect-w-16 aspect-h-9">
<img src="https://public.readdy.ai/ai/img_res/51298365f8d29d7dd2a26ea0a63ee550.jpg" alt="Audi A8" class="w-full h-full object-cover">
</div>
<div class="p-6">
<div class="flex justify-between items-start mb-4">
<div>
<h3 class="text-xl font-semibold mb-2">Audi A8</h3>
<p class="text-gray-600">2025 Model</p>
</div>
<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Available</span>
</div>
<div class="flex justify-between items-center mb-6">
<div class="flex items-center space-x-4">
<div class="flex items-center">
<i class="ri-user-line mr-2 text-gray-400"></i>
<span>5 Seats</span>
</div>
<div class="flex items-center">
<i class="ri-settings-line mr-2 text-gray-400"></i>
<span>Automatic</span>
</div>
</div>
</div>
<div class="flex justify-between items-center">
<div class="text-primary font-semibold text-xl">$269/day</div>
<button class="px-4 py-2 bg-primary text-white !rounded-button hover:bg-opacity-90 transition-colors">Book Now</button>
</div>
</div>
</div>
</div>
<div class="text-center mt-12">
<button class="px-6 py-3 bg-white text-primary border border-primary !rounded-button hover:bg-primary hover:text-white transition-colors">
View All Vehicles
</button>
</div>
</div>
</section>
<section class="py-16 lg:py-24">
<div class="container mx-auto px-4">
<div class="text-center mb-12">
<h2 class="text-3xl lg:text-4xl font-bold mb-4">Why Choose Us</h2>
<p class="text-gray-600 max-w-2xl mx-auto">Experience the difference with our premium car rental service</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div class="text-center">
<div class="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-car-front-fill" viewBox="0 0 16 16">
  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
</svg>
</div>
<h3 class="text-xl font-semibold mb-4">Premium Fleet</h3>
<p class="text-gray-600">Latest models of luxury vehicles maintained to the highest standards</p>
</div>
<div class="text-center">
<div class="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-clock-history" viewBox="0 0 16 16">
  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
</svg>
</div>
<h3 class="text-xl font-semibold mb-4">24/7 Support</h3>
<p class="text-gray-600">Round-the-clock customer service to assist you anytime</p>
</div>
<div class="text-center">
<div class="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-currency-dollar" viewBox="0 0 16 16">
  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
</svg>
</div>
<h3 class="text-xl font-semibold mb-4">Best Rates</h3>
<p class="text-gray-600">Competitive pricing with no hidden charges</p>
</div>
<div class="text-center">
<div class="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
</div>
<h3 class="text-xl font-semibold mb-4">Flexible Pickup</h3>
<p class="text-gray-600">Multiple convenient locations for pickup and drop-off</p>
</div>
</div>
</div>
</section>
<section class="py-16 lg:py-24 bg-gray-50">
<div class="container mx-auto px-4">
<div class="text-center mb-12">
<h2 class="text-3xl lg:text-4xl font-bold mb-4">What Our Customers Say</h2>
<p class="text-gray-600 max-w-2xl mx-auto">Read testimonials from our satisfied customers</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div class="bg-white p-6 rounded-lg shadow-sm">
<div class="flex items-center mb-4">
<div class="flex-shrink-0">
<img src="https://public.readdy.ai/ai/img_res/f467bc4eb6a7671c2cb5d42a6cda3065.jpg" alt="Customer" class="w-12 h-12 rounded-full object-cover">
</div>
<div class="ml-4">
<h4 class="font-semibold">Michael Anderson</h4>
<div class="flex text-yellow-400">
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
</div>
</div>
</div>
<p class="text-gray-600">"Exceptional service! The car was immaculate and the staff was incredibly professional. Will definitely use their services again."</p>
</div>
<div class="bg-white p-6 rounded-lg shadow-sm">
<div class="flex items-center mb-4">
<div class="flex-shrink-0">
<img src="https://public.readdy.ai/ai/img_res/f789ac5765907e674c595dcada9f2468.jpg" alt="Customer" class="w-12 h-12 rounded-full object-cover">
</div>
<div class="ml-4">
<h4 class="font-semibold">Sarah Thompson</h4>
<div class="flex text-yellow-400">
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
</div>
</div>
</div>
<p class="text-gray-600">"The booking process was seamless and the car exceeded my expectations. Highly recommend their premium fleet!"</p>
</div>
<div class="bg-white p-6 rounded-lg shadow-sm">
<div class="flex items-center mb-4">
<div class="flex-shrink-0">
<img src="https://public.readdy.ai/ai/img_res/ed5dc5fea963176a3bc939cec7eb2780.jpg" alt="Customer" class="w-12 h-12 rounded-full object-cover">
</div>
<div class="ml-4">
<h4 class="font-semibold">David Wilson</h4>
<div class="flex text-yellow-400">
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
<i class="ri-star-fill"></i>
</div>
</div>
</div>
<p class="text-gray-600">"Outstanding customer service and top-notch vehicles. The attention to detail and professionalism is unmatched."</p>
</div>
</div>
</div>
</section>
<section class="py-16 lg:py-24 bg-primary text-white">
<div class="container mx-auto px-4">
<div class="text-center max-w-3xl mx-auto">
<h2 class="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience Luxury?</h2>
<p class="text-xl mb-8">Book your premium vehicle today and enjoy the journey in style</p>
<button class="px-8 py-4 bg-white text-primary font-semibold !rounded-button hover:bg-opacity-90 transition-colors">
Book Now
</button>
</div>
</div>
</section>
<footer class="bg-gray-900 text-white py-12">
<div class="container mx-auto px-4">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<a href="#" class="font-['Pacifico'] text-2xl mb-6 block">CarRental</a>
<p class="text-gray-400 mb-6">Premium car rental service for your luxury travel needs</p>
<div class="flex space-x-4">
<a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors">
<i class="ri-facebook-fill"></i>
</a>
<a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors">
<i class="ri-twitter-fill"></i>
</a>
<a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors">
<i class="ri-instagram-fill"></i>
</a>
</div>
</div>
<div>
<h3 class="text-lg font-semibold mb-6">Quick Links</h3>
<ul class="space-y-4">
<li><a href="#" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Query</a></li>
<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
</ul>
</div>
<div>
<h3 class="text-lg font-semibold mb-6">Services</h3>
<ul class="space-y-4">
<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Luxury Cars</a></li>
<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Business Travel</a></li>
<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Wedding Cars</a></li>
<li><a href="#" class="text-gray-400 hover:text-white transition-colors">Airport Transfer</a></li>
</ul>
</div>
<div>
<h3 class="text-lg font-semibold mb-6">Contact Info</h3>
<ul class="space-y-4">
<li class="flex items-center">
<i class="ri-map-pin-line mr-3"></i>
<span class="text-gray-400">123 Luxury Drive, New York, NY 10001</span>
</li>
<li class="flex items-center">
<i class="ri-phone-line mr-3"></i>
<span class="text-gray-400">+1 (555) 123-4567</span>
</li>
<li class="flex items-center">
<i class="ri-mail-line mr-3"></i>
<span class="text-gray-400">info</span>
</li>
</ul>
</div>
</div>
<div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
<p>&copy; 2025 LuxeWheels. All rights reserved.</p>
</div>
</div>
</footer>`
})
export class HomeComponent {
  carRentalForm: any;
  constructor(private fb: FormBuilder) { 
    this.carRentalForm = this.fb.group({
      location: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    
    this.carRentalForm = this.fb.group({
      location: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.carRentalForm.valid) {
      Swal.fire({
        title: 'Success!',
        text: 'Your form has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.carRentalForm.reset();
    } else {
      this.carRentalForm.markAllAsTouched();
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

}
