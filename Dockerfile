# Use a specific version of Node.js to ensure consistent builds
FROM node:18-alpine AS base

# Step 1: Build the application
FROM base AS builder

WORKDIR /app

# Copy only the necessary files for installing dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies based on the preferred package manager
RUN npm ci

# Copy application source code
COPY src ./src
COPY public ./public
COPY next.config.mjs . 
COPY tsconfig.json .

# Set environment variables for the build
ENV NEXT_PUBLIC_BASE_URL=http://152.42.242.77:8000

# Build the Next.js application
RUN npm run build

# Step 2: Create a lightweight production image
FROM base AS runner

WORKDIR /app

# Create a non-root user and group
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Switch to the non-root user
USER nextjs

# Copy only the necessary files from the builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./ 
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set the same environment variable at runtime
ENV NEXT_PUBLIC_BASE_URL=http://152.42.242.77:8000

# Start the application
CMD ["node", "server.js"]
