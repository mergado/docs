# Mergado Apps Documentation

The official documentation for Mergado Apps platform which is build with GitHub Pages.

## Installation

To serve the website on your local computer, you need to install Jekyll and expected dependencies. You can do that using the [Bundler](https://bundler.io/):

```bash
sudo apt-get install -y ruby ruby-dev make gcc
sudo gem update --system
sudo gem install bundler
```

Then, **in the project's directory**, install dependencies specified the `Gemfile` locally to the project's directory by running:
```
bundle install --path vendor/bundle
```

```bash
git clone git@github.com:mergado/docs.git
```

## Basic Usage

Usually, you only need to run the following command which generates HTML files into `./_site`:

```bash
bundle exec jekyll serve
```

This command also runs a built-in development server (at http://localhost:4000/ by default). For more information follow the [official documentation](https://jekyllrb.com/docs/usage/).

If you want to create a new section to appear in the navigation, edit the `_config.yml` in root and run the command for creating a new page, for example:

```bash
$ ruby bin/jekyll-page "Authentication" api
```
