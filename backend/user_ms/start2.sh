#!/usr/bin/env sh

../rancher-compose --project-name user_ms \
    --url http://172.31.40.255:8080/v1/projects/1a5 \
    --access-key 043C1ED8882C46EA4B54 \
    --secret-key 2mcR7mBsxyjRsNbsePHi58uTqPhR9XHWw1kvRohE \
    -f docker-compose.yml \
    --verbose up \
    -d --force-upgrade \
    --confirm-upgrade
