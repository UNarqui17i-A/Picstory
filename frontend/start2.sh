#!/usr/bin/env sh

./rancher-compose --project-name frontend \
    --url http://172.31.40.255:8080/v2-beta/projects/1a5 \
    --access-key C92F20F6F47340A0FA90 \
    --secret-key uznM8DyUZCacnnfeWMi5N13aytq1m5r4iHHjWC9D \
    -f docker-compose.yml \
    --verbose up \
    -d --force-upgrade \
    --confirm-upgrade
