#!/usr/bin/env bash

echo "environment information"
node -v
npm -v

echo "installing dependencies"
rm -rf node_modules > /dev/null 2>&1
npm cache clean
npm install