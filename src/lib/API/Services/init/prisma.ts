import { PrismaClient } from '@prisma/client';

// Validate DATABASE_URL format
function validateDatabaseUrl(url: string | undefined): string {
  if (!url) {
    throw new Error('DATABASE_URL is not defined in environment variables');
  }
  
  // Check if URL starts with postgresql:// for PostgreSQL
  if (!url.startsWith('postgresql://')) {
    throw new Error('DATABASE_URL must start with "postgresql://" for PostgreSQL database');
  }
  
  // Basic validation for PostgreSQL URL format
  const urlPattern = /^postgresql:\/\/[^:]+:[^@]+@[^:]+:\d+\/[^\s]+$/;
  if (!urlPattern.test(url)) {
    throw new Error('DATABASE_URL format is invalid. Expected format: postgresql://username:password@host:port/database');
  }
  
  return url;
}

// Global variable to store the Prisma client instance
let prisma: PrismaClient | null = null;

// Function to create and return Prisma client instance
function getPrismaClient(): PrismaClient {
  if (prisma) {
    return prisma;
  }

  try {
    let databaseUrl: string;
    
    if (process.env.NODE_ENV === 'development') {
      databaseUrl = validateDatabaseUrl(process.env.DATABASE_URL);      
      prisma = new PrismaClient({ 
        datasources: { 
          db: { 
            url: databaseUrl 
          } 
        },
        log: ['query', 'info', 'warn', 'error']
      });
    } else if (process.env.NODE_ENV === 'production') {
      databaseUrl = validateDatabaseUrl(process.env.DATABASE_URL);
      prisma = new PrismaClient({ 
        datasources: { 
          db: { 
            url: databaseUrl 
          } 
        },
        log: ['warn', 'error']
      });
    } else if (process.env.NODE_ENV === 'test') {
      databaseUrl = validateDatabaseUrl(process.env.DATABASE_URL_TEST);
      prisma = new PrismaClient({
        datasources: {
          db: {
            url: databaseUrl
          }
        },
        log: ['warn', 'error']
      });
    } else {
      // Fallback for other environments
      databaseUrl = validateDatabaseUrl(process.env.DATABASE_URL);
      prisma = new PrismaClient({ 
        datasources: { 
          db: { 
            url: databaseUrl 
          } 
        },
        log: ['warn', 'error']
      });
    }

    return prisma;
  } catch (error) {
    console.error('Failed to initialize Prisma Client:', error);
    throw error;
  }
}

// Export the function instead of direct instance
export default getPrismaClient;
