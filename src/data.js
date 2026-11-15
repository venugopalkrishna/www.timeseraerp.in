import { Gem, Store, Factory, Wallet, Shirt, Zap, ShoppingCart, Palette, Cloud, Smartphone, MessageSquareText, Mail, Database,
  ScanBarcode, Radio, FileText, ShieldCheck, Users, Rocket, Receipt, Globe, Code2, Network, KeyRound, LayoutDashboard, BookOpen,
  MessageCircle, Wrench, GraduationCap, Settings, IndianRupee, Layers, Target, Heart, Eye } from "lucide-react";

export const CONTACT = {
  address: "#121, 108, Simhapuri Cloth Market, Rebala Vari Street, Stonehousepet",
  support: "+91 7995444033", sales: "+91 7995444034",
  emails: ["support@timeseraerp.in", "sales@timeseraerp.in"],
};
export const NAV = [["/", "Home"], ["/about", "About"], ["/products", "Softwares"], ["/services", "Services"], ["/portfolio", "Portfolio"], ["/testimonials", "Reviews"]];
export const THEMES = { "/": "home", "/about": "about", "/products": "products", "/services": "services", "/portfolio": "portfolio", "/testimonials": "reviews", "/contact": "contact" };

export const PRODUCTS = [
  { icon: Gem, name: "Retail Jewellery", tag: "Jewellery", line: "Billing, tag-wise stock, old-gold exchange and schemes — built for showroom speed." },
  { icon: Store, name: "Wholesaler", tag: "Jewellery", line: "Orders, estimates and invoices that keep a busy wholesale counter moving." },
  { icon: Factory, name: "Manufacturer", tag: "Jewellery", line: "Karigar issue/receipt, production stages and wastage under tight control." },
  { icon: Wallet, name: "Scheme Management", tag: "Jewellery", line: "Gold saving schemes with members, payments, dues and live dashboards." },
  { icon: Palette, name: "Art Jewellery", tag: "Other", line: "Design-led catalogues and stock for fashion and imitation jewellery." },
  { icon: Shirt, name: "Garments & Textile", tag: "Other", line: "Size and colour variants, barcode billing and multi-store stock." },
  { icon: Zap, name: "Electrical & Appliances", tag: "Other", line: "Serial-number tracking, warranty and service-ready billing." },
  { icon: ShoppingCart, name: "Super Market", tag: "Other", line: "Lightning POS, barcode scanning, offers and purchase control." },
];
export const FEATURES = [
  [Store, "Single Store", "Simple, fast setup for one outlet"], [Network, "Multi Store", "Every branch, one live view"],
  [Mail, "Emailing System", "Send bills and reports by email"], [MessageSquareText, "SMS Tools", "Campaigns and reminders"],
  [Database, "Auto Backup", "Scheduled, hands-off backups"], [MessageCircle, "WhatsApp Integration", "Share invoices instantly"],
  [ScanBarcode, "Barcode Technologies", "Scan, tag and bill faster"], [Radio, "RFID Technologies", "Count stock in seconds"],
  [Smartphone, "Mobile App", "Billing from your phone"], [Cloud, "Cloud Based", "Work from anywhere"],
  [KeyRound, "SMS OTP", "Secure verification flows"], [FileText, "Tally Integration", "Accounts flow to Tally"],
  [Code2, "Software Development", "Custom modules on demand"], [BookOpen, "E-catalogue", "Share designs online"],
  [ShieldCheck, "Data Security", "Role-based, encrypted access"], [Receipt, "E-Invoice", "GST-ready e-invoicing"],
  [LayoutDashboard, "High User Interface", "Clean screens staff enjoy"], [Users, "Multi User", "Roles, rights and audit trail"],
];
export const SERVICES = [
  { icon: Code2, title: "Software Development", text: "ERP modules and apps shaped around how your business really works.", pts: ["Custom workflows", "API & Tally integrations", "Ongoing enhancements"] },
  { icon: Globe, title: "Web Development", text: "Fast, modern websites that represent your brand and connect to your stock.", pts: ["Responsive design", "SEO-ready pages", "Admin panel"] },
  { icon: ShoppingCart, title: "Ecommerce Website", text: "Sell online with an e-catalogue that stays in sync with your inventory.", pts: ["Product catalogue", "Cart & orders", "Payment-ready"] },
  { icon: Smartphone, title: "Mobile Application", text: "Billing, scheme and customer apps for Android and iOS.", pts: ["Billing on the go", "Customer self-service", "Push alerts"] },
  { icon: Wrench, title: "Installation & Support", text: "Quick installation and a team that is available almost every hour.", pts: ["Remote & on-site", "Data migration", "Priority helpline"] },
  { icon: GraduationCap, title: "Training", text: "Hands-on sessions run by seasoned professionals using real scenarios.", pts: ["Staff onboarding", "Role-wise guides", "Refresher sessions"] },
];
export const CLIENTS = ["BMR", "Jewel Palace", "Jain Gold", "Modern Stores", "Your Brand Here"];
export const STEPS = [
  [Rocket, "Installation", "A user-friendly setup that gets you billing without the headache."],
  [GraduationCap, "Training", "Practical sessions with seasoned pros so the whole team is confident."],
  [Layers, "Managing", "Run stock, sales, schemes and accounts under one roof."],
  [IndianRupee, "Cost Effective", "More capability for less — no overpriced alternatives."],
];
export const PRICING = [
  { name: "Jewellery Retail", clients: "300+", tiers: [["Basic", "25,000"], ["Pro", "45,000"], ["Exclusive", "65,000"]] },
  { name: "Jewellery Wholesale", clients: "100+", tiers: [["Basic", "15,000"], ["Pro", "25,000"], ["Exclusive", "45,000"]] },
  { name: "Clothing Retail", clients: "500+", tiers: [["Pro", "15,000"], ["Exclusive", "25,000"]] },
];
export const PERKS = {
  Basic: ["Core billing & stock", "Single store", "Standard reports", "Email support"],
  Pro: ["Everything in Basic", "Multi store & users", "SMS, WhatsApp, barcode", "Priority support"],
  Exclusive: ["Everything in Pro", "Tally & e-invoice", "Mobile app & e-catalogue", "Dedicated manager"],
};
/* Sample content — replace with real testimonials / cases / team */
export const TESTIMONIALS = [
  { name: "Ravi K.", role: "Owner, Retail Jewellery", text: "Billing and tag-wise stock finally match every evening. The team picks up the phone whenever we call." },
  { name: "Anitha S.", role: "Director, Wholesale House", text: "Estimates, orders and invoices live in one place. My staff learned it in a single day." },
  { name: "Mahesh J.", role: "Partner, Gold Merchants", text: "Scheme dues and member payments are clear on one dashboard — collections have improved." },
  { name: "Priya D.", role: "Manager, Fashion Retail", text: "Barcode billing across our stores cut queue times and stock errors dramatically." },
  { name: "Suresh B.", role: "Owner, Supermarket", text: "Fast POS, simple offers and honest pricing. Exactly what a growing store needs." },
];
export const CASES = [
  { name: "Heritage Gold", type: "Retail", stat: "12 branches synced", hue: 160, icon: Gem },
  { name: "Lakshmi Wholesale", type: "Wholesale", stat: "40% faster orders", hue: 210, icon: Store },
  { name: "Swarna Schemes", type: "Scheme", stat: "8,000+ members", hue: 40, icon: Wallet },
  { name: "Metro Fashion", type: "Garments", stat: "5 stores, 1 stock", hue: 290, icon: Shirt },
  { name: "BrightHome", type: "Electrical", stat: "Serial-level tracking", hue: 20, icon: Zap },
  { name: "FreshCart", type: "Supermarket", stat: "3-second billing", hue: 340, icon: ShoppingCart },
];
export const VALUES = [[Target, "Quality", "Software that is tested, tuned and made to last."], [ShieldCheck, "Reliability", "Systems and people you can count on, every day."], [Heart, "Integrity", "Honest advice, fair pricing, no surprises."]];
export const MILESTONES = [["Day one", "Started with a simple promise: better billing for jewellers."], ["Growing", "Expanded to wholesale, manufacturing and schemes."], ["Beyond jewellery", "Garments, electrical and supermarket solutions."], ["Today", "1000+ owners and a cloud-first, mobile-ready platform."]];
export const TEAM = ["Founder & CEO", "Head of Product", "Lead Engineer", "Support Lead"];
export const LEGAL = {
  terms: { title: "Terms & Conditions", s: [["Acceptance", "By using Timesera software and services you agree to these terms."], ["Licence", "Software is licensed, not sold, for the tier and business you purchased."], ["Payments", "Prices are quoted plus applicable tax and are payable as agreed."], ["Liability", "Replace this placeholder with text reviewed by your legal advisor."]] },
  privacy: { title: "Privacy Policy", s: [["Data we collect", "Contact details and business information you share with us."], ["How we use it", "To deliver, support and improve our products."], ["Security", "Access is role-based and backups are encrypted."], ["Your rights", "Replace this placeholder with text reviewed by your legal advisor."]] },
  refund: { title: "Refund / Return Policy", s: [["Eligibility", "Describe when a refund can be requested."], ["Process", "Explain how to raise a request with support."], ["Timelines", "State how long approved refunds take."], ["Exceptions", "Replace this placeholder with text reviewed by your legal advisor."]] },
};
export { Eye };
