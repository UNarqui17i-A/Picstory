../rancher-compose --project-name post_ms\
    --url http://192.168.99.100:8080/v1/projects/1a5 \
    --access-key 2553A14B5035D7A58EF9 \
    --secret-key HYNT9bN2y93xC8MMMGc47YGCEpXqFQVgFSMSqd6n \
    -f "docker-compose.yml" \
    --verbose up \
    -d --force-upgrade \
    --confirm-upgrade
