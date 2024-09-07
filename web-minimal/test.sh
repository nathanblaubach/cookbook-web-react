#!/bin/sh

find . -type f -name "*.test.js" -exec node {} \;
