export const SERVICES = [
  { id: 'software', icon: 'Code2', title: 'Software Development', text: 'ERP modules and apps shaped around how your business really works.', points: ['Custom workflows', 'API & Tally integrations', 'Ongoing enhancements'] },
  { id: 'web', icon: 'Globe', title: 'Web Development', text: 'Fast, modern websites that represent your brand and connect to your stock.', points: ['Responsive design', 'SEO-ready pages', 'Admin panel'] },
  { id: 'ecommerce', icon: 'ShoppingCart', title: 'Ecommerce Website', text: 'Sell online with an e-catalogue that stays in sync with your inventory.', points: ['Product catalogue', 'Cart & orders', 'Payment-ready'] },
  { id: 'mobile', icon: 'Smartphone', title: 'Mobile Application', text: 'Billing, scheme and customer apps for Android and iOS.', points: ['Billing on the go', 'Customer self-service', 'Push alerts'] },
  { id: 'support', icon: 'Wrench', title: 'Installation & Support', text: 'Quick installation and a team that is available almost every hour.', points: ['Remote & on-site', 'Data migration', 'Priority helpline'] },
  { id: 'training', icon: 'GraduationCap', title: 'Training', text: 'Hands-on sessions run by seasoned pros using real scenarios.', points: ['Staff onboarding', 'Role-wise guides', 'Refresher sessions'] },
];

export const CAPABILITIES = [
  ['Single Store', 'Store'], ['Multi Store', 'Building2'], ['Mobile Apps', 'Smartphone'],
  ['Barcode Technologies', 'ScanBarcode'], ['RFID Technologies', 'Radio'], ['Software Development', 'Code2'],
  ['E-catalogue', 'BookOpen'], ['Data Security', 'ShieldCheck'], ['Scheme Management', 'Wallet'],
  ['User Management', 'Users'], ['Tag-wise Stock', 'Tag'], ['Old Gold Exchange', 'Coins'],
  ['WhatsApp & SMS', 'MessageCircle'], ['Tally Integration', 'Layers'], ['E-Invoice', 'FileText'],
  ['Reports & Analytics', 'BarChart3'], ['Cloud Backup', 'CloudUpload'], ['Role-based Access', 'KeyRound'],
].map(([title, icon]) => ({ title, icon }));
