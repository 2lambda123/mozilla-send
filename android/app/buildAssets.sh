#!/usr/bin/env bash

npm run build
rm -rf src/main/assets
mkdir -p src/main/assets
cp -R ../../dist/* src/main/assets