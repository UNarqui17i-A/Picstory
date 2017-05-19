#!/usr/bin/env sh

./rancher-compose --project-name frontend \
    --url http://192.169.69.5:8080/v2-beta/projects/1a225 \
    --access-key 9A8E62940F45454FB3FD \
    --secret-key 1AvureAbUYC5sXbNvXBR6ccqMGi25txmsEVmvytx \
    -f docker-compose.yml \
    --verbose up \
    -d --force-upgrade \
    --confirm-upgrade
