import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any [] = [
    { 
      id: '1',
      name: 'Surprise Gift Basket',
      price: 30,
      status: true,
      rating: 4.9,
      cover: 'assets/icon/gift-basket.jpg',
      description: 'Unbox joy and excitement with our carefully curated Surprise Gift Basket, filled with delightful surprises.'
    },
    {
      id: '2',
      name: 'Luxury Chocolate Box',
      price: 200,
      status: true,
      rating: 4.7,
      cover: 'assets/icon/chocolate-box.jpg',
      description: 'Indulge in the rich and decadent flavors of our Luxury Chocolate Box, a perfect treat for any occasion.'
    },
    {
      id: '3',
      name: 'OTT Subscription',
      price: 69,
      status: true,
      rating: 4.9,
      cover: 'assets/icon/gift-card.jpg',
      description: 'Immerse yourself in a world of entertainment with our exclusive OTT Subscription gift.'
    },
    {
      id: '4',
      name: 'Designer Handbag',
      price: 5000,
      status: true,
      rating: 4.8,
      cover: 'assets/icon/handbag.jpg',
      description: 'Elevate your style with our chic and fashionable Designer Handbag, a statement piece for any ensemble.'
    },
    {
      id: '5',
      name: 'Personalized Mug',
      price: 20,
      status: true,
      rating: 4.5,
      cover: 'assets/icon/mug.jpg',
      description: 'Start your day with a touch of personalization using our delightful Personalized Mug.'
    },
    {
      id: '6',
      name: 'Perfume Set',
      price: 200,
      status: true,
      rating: 4.9,
      cover: 'assets/icon/perfume-set.jpg',
      description: 'Discover the essence of luxury with our Perfume Set, a captivating blend of enchanting fragrances.'
    },
    {
      id: '7',
      name: 'Jewelry Box',
      price: 400,
      status: true,
      rating: 4.6,
      cover: 'assets/icon/jewelry-box.jpg',
      description: 'Store your precious jewels in style with our exquisitely designed Jewelry Box, a symbol of elegance.'
    },
    {
      id: '8',
      name: 'Romantic Dinner Set',
      price: 150,
      status: true,
      rating: 4.9,
      cover: 'assets/icon/dinner-set.jpg',
      description: 'Create magical moments with our Romantic Dinner Set, perfect for a candlelit evening with your loved one.'
    },
    {
      id: '9',
      name: 'Leather Wallet',
      price: 300,
      status: true,
      rating: 4.6,
      cover: 'assets/icon/wallet.jpg',
      description: 'Upgrade your accessory collection with our stylish and durable Leather Wallet, a blend of functionality and fashion.'
    },
    {
      id: '10',
      name: 'Phone Case',
      price: 60,
      status: true,
      rating: 4.7,
      cover: 'assets/icon/phone-case.jpg',
      description: 'Protect your device in style with our trendy Phone Case, personalized for the modern individual.'
    },
    {
      id: '11',
      name: 'Diamond Jewelry',
      price: 1000,
      status: true,
      rating: 4.6,
      cover: 'assets/icon/diamond.jpg',
      description: 'Adorn yourself with elegance and grace with our exquisite Diamond Jewelry collection.'
    },
    {
      id: '12',
      name: 'Suitcase',
      price: 150,
      status: true,
      rating: 4.5,
      cover: 'assets/icon/travel-bag.jpg',
      description: 'Embark on journeys in style with our Leather Travel Set, crafted for the modern-day explorer.'
    },
    {
      id: '13',
      name: 'Modern Wall Clock',
      price: 420,
      status: true,
      rating: 4.7,
      cover: 'assets/icon/wall-clock.jpg',
      description: 'Enhance your living space with our Modern Wall Clock, a blend of functionality and contemporary design.'
    },
    {
      id: '14',
      name: 'Eco-friendly Planters',
      price: 15,
      status: true,
      rating: 4.5,
      cover: 'assets/icon/planters.jpg',
      description: 'Bring nature indoors with our Eco-friendly Planters, designed for the eco-conscious and nature enthusiasts.'
    }
  ]

  constructor() { }
}
