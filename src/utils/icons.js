// One place that maps string keys (used in /data) to lucide icons.
import {
  Gem, Store, Factory, Wallet, Palette, Shirt, Zap, ShoppingCart, Code2, Globe, Smartphone, Wrench,
  GraduationCap, Rocket, BookOpen, ShieldCheck, ScanBarcode, Radio, Layers, Building2, Users, FileText,
  MessageCircle, BarChart3, CloudUpload, KeyRound, Tag, Coins, Target, Heart, Twitter, Facebook,
  Instagram, Linkedin, IndianRupee,
} from 'lucide-react';

const ICONS = {
  Gem, Store, Factory, Wallet, Palette, Shirt, Zap, ShoppingCart, Code2, Globe, Smartphone, Wrench,
  GraduationCap, Rocket, BookOpen, ShieldCheck, ScanBarcode, Radio, Layers, Building2, Users, FileText,
  MessageCircle, BarChart3, CloudUpload, KeyRound, Tag, Coins, Target, Heart, Twitter, Facebook,
  Instagram, Linkedin, IndianRupee,
};

export const getIcon = (name) => ICONS[name] || Gem;
