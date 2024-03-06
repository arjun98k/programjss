#!/bin/bash

# Check if a commit message and repository URL are provided
if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: $0 <commit_message> <repository_url>"
    exit 1
fi

# Add all changes
git add .

# Commit with the provided message
git commit -m "$1"

# Set the remote repository URL
# git remote add origin "$2"

# Push changes to the remote repository (assuming 'main' is your branch, modify as needed)
git push origin main

