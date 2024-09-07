#!/bin/sh

cd gen
find . -type f -name "*.gen.js" -exec node {} \;
