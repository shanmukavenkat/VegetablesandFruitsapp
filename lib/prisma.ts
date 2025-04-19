import { PrismaClient } from '@prisma/client'
import { Pool, neonConfig } from '@neondatabase/serverless'
import ws from 'ws'

// Setup Neon WebSocket
neonConfig.webSocketConstructor = ws

// Setup Neon Pool
const pool = new Pool({ connectionString: process.env.DATABASE_URL })

// Setup Prisma Client with Neon driver
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

export default prisma
