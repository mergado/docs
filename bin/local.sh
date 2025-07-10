#!/bin/bash

cd $(dirname $0)/..

docker build --tag mergado-docs-jekyll -f ./docker/Dockerfile .

docker run --rm \
  --user "$(id -u):$(id -g)" \
  --volume="$PWD:/srv/jekyll" \
  -p 4000:4000 \
  -it mergado-docs-jekyll \
  bundle exec jekyll serve --force_polling --host 0.0.0.0
