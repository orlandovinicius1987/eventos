#!/usr/bin/env bash

echo "Killing node processes..."
pkill node

echo "Compiling assets to production..."
npm run production

echo "Clearing cache..."
php artisan cache:clear

echo "Commiting version.yml file..."
git add config/version.yml
git add public/*
git commit -m "Update version and compile to production"

echo "Absorbing version..."
php artisan version:absorb

echo "done."
