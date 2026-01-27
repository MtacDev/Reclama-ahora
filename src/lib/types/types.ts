import { LucideIcon } from 'lucide-react';
import { IntervalE } from './enums';

export type NavItem = {
  title: string;
  link: string;
};

export type NavItemSidebar = {
  title: string;
  link: string;
  icon: LucideIcon;
};

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PlanI {
  name: string;
  interval?: IntervalE;
  price?: string;
  price_id?: string;
  isPopular?: boolean;
}

export interface ProductI {
  name: string;
  description: string;
  features: string[];
  plans: PlanI[];
}

// Cloud Provider Configuration Types
export interface CloudProviderConfig {
  provider: 'aws' | 'gcp' | 'azure';
  region: string;
  environment: 'development' | 'staging' | 'production';
}

export interface AWSConfig extends CloudProviderConfig {
  provider: 'aws';
  services: {
    hosting: 'amplify' | 'vercel' | 'ec2' | 'ecs';
    database: 'rds' | 'aurora' | 'neon' | 'planetscale';
    storage: 's3';
    email: 'ses' | 'external';
    cdn: 'cloudfront';
    auth?: 'cognito' | 'nextauth';
    functions?: 'lambda';
    monitoring?: 'cloudwatch';
  };
}

export interface GCPConfig extends CloudProviderConfig {
  provider: 'gcp';
  services: {
    hosting: 'cloud-run' | 'compute-engine' | 'vercel';
    database: 'cloud-sql' | 'firestore' | 'neon';
    storage: 'cloud-storage';
    email: 'sendgrid' | 'external';
    cdn: 'cloud-cdn';
    auth?: 'firebase-auth' | 'nextauth';
    functions?: 'cloud-functions';
    monitoring?: 'cloud-monitoring';
  };
}

// File Upload Types for S3/Cloud Storage
export interface FileUploadConfig {
  maxFileSize: number; // in bytes
  allowedFileTypes: string[];
  uploadPath: string;
  bucketName?: string;
}

export interface UploadedFile {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  uploadedAt: Date;
  userId?: string;
}

// Email Service Types
export interface EmailConfig {
  provider: 'aws-ses' | 'sendgrid' | 'nodemailer';
  fromEmail: string;
  replyToEmail?: string;
  templates: {
    welcome?: string;
    passwordReset?: string;
    emailVerification?: string;
  };
}
