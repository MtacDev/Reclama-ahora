import { AWSConfig, GCPConfig, FileUploadConfig, EmailConfig } from '@/lib/types/types';

// AWS Configuration for your project
export const awsConfig: AWSConfig = {
  provider: 'aws',
  region: process.env.AWS_REGION || 'us-east-1',
  environment: (process.env.NODE_ENV as 'development' | 'staging' | 'production') || 'development',
  services: {
    hosting: 'vercel', // or 'amplify' when you migrate
    database: 'neon', // keep current setup, migrate to 'rds' later
    storage: 's3',
    email: 'ses',
    cdn: 'cloudfront',
    auth: 'nextauth', // keep current NextAuth setup
    functions: 'lambda',
    monitoring: 'cloudwatch'
  }
};

// GCP Configuration (for comparison)
export const gcpConfig: GCPConfig = {
  provider: 'gcp',
  region: process.env.GCP_REGION || 'us-central1',
  environment: (process.env.NODE_ENV as 'development' | 'staging' | 'production') || 'development',
  services: {
    hosting: 'vercel', // or 'cloud-run'
    database: 'neon', // or 'cloud-sql'
    storage: 'cloud-storage',
    email: 'sendgrid',
    cdn: 'cloud-cdn',
    auth: 'nextauth',
    functions: 'cloud-functions',
    monitoring: 'cloud-monitoring'
  }
};

// File Upload Configuration for AWS S3
export const fileUploadConfig: FileUploadConfig = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedFileTypes: [
    'image/jpeg',
    'image/png',
    'image/webp',
    'application/pdf',
    'text/csv',
    'application/json'
  ],
  uploadPath: 'uploads',
  bucketName: process.env.AWS_S3_BUCKET_NAME
};

// Email Configuration for AWS SES
export const emailConfig: EmailConfig = {
  provider: 'aws-ses',
  fromEmail: process.env.EMAIL_FROM || 'noreply@yourdomain.com',
  replyToEmail: process.env.EMAIL_REPLY_TO || 'support@yourdomain.com',
  templates: {
    welcome: 'welcome-template',
    passwordReset: 'password-reset-template',
    emailVerification: 'email-verification-template'
  }
};

// Cost Comparison (estimated monthly for small project)
export const costComparison = {
  aws: {
    hosting: 0, // Vercel free tier
    database: 0, // Neon free tier
    storage: 2, // S3 - $2/month for 100GB
    email: 1, // SES - $1/month for 10k emails
    cdn: 1, // CloudFront - $1/month
    total: 4 // $4/month
  },
  gcp: {
    hosting: 0, // Vercel free tier
    database: 0, // Neon free tier
    storage: 3, // Cloud Storage - $3/month for 100GB
    email: 15, // SendGrid - $15/month
    cdn: 2, // Cloud CDN - $2/month
    total: 20 // $20/month
  }
};

// Migration phases for your project
export const migrationPhases = {
  phase1: {
    description: 'Start with AWS services while keeping current infrastructure',
    services: ['s3', 'ses', 'cloudfront'],
    timeframe: '1-2 weeks',
    cost: '$2-4/month'
  },
  phase2: {
    description: 'Move to AWS hosting and enhanced services',
    services: ['amplify', 'rds', 'lambda', 'api-gateway'],
    timeframe: '1-2 months',
    cost: '$10-25/month'
  },
  phase3: {
    description: 'Full AWS ecosystem with auto-scaling',
    services: ['ecs', 'aurora', 'cognito', 'eventbridge'],
    timeframe: '3-6 months',
    cost: '$25-100/month'
  }
};

export default awsConfig; 