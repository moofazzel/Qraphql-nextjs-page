#!/bin/bash

# Create required directories if they don't exist
mkdir -p out_functions
mkdir -p out_publish

# Move serverless functions to out_functions
mv .next/serverless/pages/* out_functions/

# Move static files to out_publish
mv .next/serverless/pages/* out_publish/
