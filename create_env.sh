#!/bin/bash

read -p "Please enter your IP API Key: " ip_api_key

echo "IPAPI_API_KEY = \"$ip_api_key\"" > ./env.js