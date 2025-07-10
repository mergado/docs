FROM ruby:3.2-alpine3.18

# build-base - Needed to compile native extensions (e.g. nokogiri).
# libffi-dev - Required by ffi gem (used by github-pages).
# yaml-dev - Required by psych, which is a YAML parser used by Jekyll.
# zlib-dev - Used by various gems (including gzip support).
RUN apk add --no-cache \
  build-base \
  libffi-dev \
  yaml-dev \
  zlib-dev \
  python3

RUN addgroup -S jekyll && adduser -S jekyll -G jekyll

ENV APP_HOME=/srv/jekyll \
    BUNDLE_PATH=/gems
RUN mkdir -p $APP_HOME $BUNDLE_PATH && \
    chown -R jekyll:jekyll $APP_HOME $BUNDLE_PATH

WORKDIR $APP_HOME
USER jekyll

COPY --chown=jekyll:jekyll Gemfile Gemfile.lock ./

RUN gem install bundler -v 2.4.22 && \
    bundle install

EXPOSE 4000
CMD ["bundle", "exec", "jekyll", "serve"]
