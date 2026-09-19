import React from 'react';
import {
  ShieldCheck,
  Vote,
  CreditCard,
  Globe,
  Car,
  FileCheck,
  Coins,
  Home,
  UserCheck,
  Files,
  Building2,
  ClipboardEdit,
  GraduationCap,
  ScrollText,
  Landmark,
  Calculator,
  BadgePercent,
  ShieldAlert,
  HeartHandshake,
  Wallet,
  Languages,
  Keyboard,
  FileUser,
  FilePenLine,
  FolderCheck,
  Printer,
  Copy,
  Palette,
  FileMinus,
  ScanLine,
  Layers,
  Camera,
  Cpu,
  Fingerprint,
  FileText,
  Laptop,
  ReceiptIndianRupee,
  Award,
  MapPin,
  Store,
  MessageSquare,
  Compass,
  LucideProps,
} from 'lucide-react';

interface ServiceIconProps extends LucideProps {
  name: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-6 h-6', ...props }) => {
  switch (name) {
    case 'Fingerprint':
      return <Fingerprint className={className} {...props} />;
    case 'Vote':
      return <Vote className={className} {...props} />;
    case 'CreditCard':
      return <CreditCard className={className} {...props} />;
    case 'Globe':
      return <Globe className={className} {...props} />;
    case 'Car':
      return <Car className={className} {...props} />;
    case 'FileCheck':
      return <FileCheck className={className} {...props} />;
    case 'Coins':
      return <Coins className={className} {...props} />;
    case 'Home':
      return <Home className={className} {...props} />;
    case 'UserCheck':
      return <UserCheck className={className} {...props} />;
    case 'Files':
      return <Files className={className} {...props} />;
    case 'Building2':
      return <Building2 className={className} {...props} />;
    case 'ClipboardEdit':
      return <ClipboardEdit className={className} {...props} />;
    case 'GraduationCap':
      return <GraduationCap className={className} {...props} />;
    case 'ScrollText':
      return <ScrollText className={className} {...props} />;
    case 'Landmark':
      return <Landmark className={className} {...props} />;
    case 'Calculator':
      return <Calculator className={className} {...props} />;
    case 'BadgePercent':
      return <BadgePercent className={className} {...props} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} {...props} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} {...props} />;
    case 'Wallet':
      return <Wallet className={className} {...props} />;
    case 'Languages':
      return <Languages className={className} {...props} />;
    case 'Keyboard':
      return <Keyboard className={className} {...props} />;
    case 'FileUser':
      return <FileUser className={className} {...props} />;
    case 'FilePenLine':
      return <FilePenLine className={className} {...props} />;
    case 'FolderCheck':
      return <FolderCheck className={className} {...props} />;
    case 'Printer':
      return <Printer className={className} {...props} />;
    case 'Copy':
      return <Copy className={className} {...props} />;
    case 'Palette':
      return <Palette className={className} {...props} />;
    case 'FileMinus':
      return <FileMinus className={className} {...props} />;
    case 'ScanLine':
      return <ScanLine className={className} {...props} />;
    case 'Layers':
      return <Layers className={className} {...props} />;
    case 'Camera':
      return <Camera className={className} {...props} />;
    case 'Cpu':
      return <Cpu className={className} {...props} />;
    case 'Laptop':
      return <Laptop className={className} {...props} />;
    case 'ReceiptIndianRupee':
      return <ReceiptIndianRupee className={className} {...props} />;
    case 'Award':
      return <Award className={className} {...props} />;
    case 'MapPin':
      return <MapPin className={className} {...props} />;
    case 'Store':
      return <Store className={className} {...props} />;
    case 'MessageSquare':
      return <MessageSquare className={className} {...props} />;
    case 'Compass':
      return <Compass className={className} {...props} />;
    case 'FileText':
      return <FileText className={className} {...props} />;
    case 'ShieldCheck':
    default:
      return <ShieldCheck className={className} {...props} />;
  }
};
