#!/usr/bin/env bash

echo "Killing node processes..."
pkill node

echo "Compiling assets to production..."
npm run production

echo "Commit production files..."
git add config/version.yml
git add public/*
git commit -m "Compile to production"

echo "Clearing cache..."
php artisan cache:clear

echo "Absorbing version..."
php artisan version:absorb

echo "Commiting version.yml file..."
git add config/version.yml
git commit -m "Update version"

echo "done."
