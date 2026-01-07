#!/bin/bash
# Script to clean cache and restart development server

echo "🧹 Cleaning Next.js cache..."
rm -rf .next

echo "🧹 Clearing node_modules/.cache..."
rm -rf node_modules/.cache

echo "🚀 Starting development server..."
npm run dev


