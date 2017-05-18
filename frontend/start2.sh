#!/usr/bin/env sh

./rancher-compose --project-name frontend \
    --url http://192.169.69.2:8080/v1/projects/1a5 \
    --access-key 4E20D2C6C92278BDF77B \
    --secret-key qSBR5obJqsg4YVJfnLAhNJarzsySXuc6j1G1Ak5F \
    -f docker-compose.yml \
    --verbose up \
    -d --force-upgrade \
    --confirm-upgrade
