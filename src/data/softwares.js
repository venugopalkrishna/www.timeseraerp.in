// Industry software list + pricing tiers. `icon` is a key from src/utils/icons.js
export const SOFTWARES = [
  { id: 'retail-jewellery', icon: 'Gem', title: 'Retail Jewellery', group: 'Jewellery', text: 'Billing, tag-wise stock, old-gold exchange and schemes — built for showroom speed.' },
  { id: 'wholesaler', icon: 'Store', title: 'Wholesaler', group: 'Jewellery', text: 'Orders, estimates and invoices that keep a busy wholesale counter moving.' },
  { id: 'manufacturer', icon: 'Factory', title: 'Manufacturer', group: 'Jewellery', text: 'Karigar issue/receipt, production stages and wastage under tight control.' },
  { id: 'scheme', icon: 'Wallet', title: 'Scheme Management', group: 'Jewellery', text: 'Gold saving schemes with members, payments, dues and live dashboards.' },
  { id: 'art-jewellery', icon: 'Palette', title: 'Art Jewellery', group: 'Jewellery', text: 'Design-led catalogues and stock for fashion and imitation jewellery.' },
  { id: 'garments', icon: 'Shirt', title: 'Garments & Textile', group: 'Other', text: 'Size and colour variants, barcode billing and multi-store stock.' },
  { id: 'electrical', icon: 'Zap', title: 'Electrical & Appliances', group: 'Other', text: 'Serial-number tracking, warranty and service-ready billing.' },
  { id: 'supermarket', icon: 'ShoppingCart', title: 'Super Market', group: 'Other', text: 'Lightning POS, barcode scanning, offers and purchase control.' },
];

export const SOFTWARE_FILTERS = ['All', 'Jewellery', 'Other'];

const TIERS = [
  { name: 'Basic', price: 25000, features: ['Core billing & stock', 'Single store', 'Standard reports', 'Email support'] },
  { name: 'Pro', price: 45000, popular: true, features: ['Everything in Basic', 'Multi store & users', 'SMS, WhatsApp, barcode', 'Priority support'] },
  { name: 'Exclusive', price: 65000, features: ['Everything in Pro', 'Tally & e-invoice', 'Mobile app & e-catalogue', 'Dedicated manager'] },
];

// TODO: set the real prices for Wholesale and Clothing – they currently mirror Retail.
export const PRICING = {
  'Jewellery Retail': TIERS,
  'Jewellery Wholesale': TIERS,
  'Clothing Retail': TIERS,
};
