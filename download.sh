#!/bin/bash
rm data/export.js
curl "https://cs7930.firebaseio.com//.json?print=pretty&auth=" > data/export.js
cat data/header.txt data/export.js > data/data.js
rm data/export.js