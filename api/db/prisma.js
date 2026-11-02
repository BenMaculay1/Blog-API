const { PrismaPg } = require('@prisma/adapter-pg');  // For other db adapters, see Prisma docs
const { PrismaClient } = require('../../generated/prisma');
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

module.exports = prisma