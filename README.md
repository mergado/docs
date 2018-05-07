# Mergado Apps Documentation

The official documentation for Mergado Apps platform which is build with GitHub Pages.

## Installation

First, you need to install Jekyll which can be done via RubyGems. If you don't have RubyGems installed (the command `whereis gem` should return tha path to the RubyGems' binary), follow [this guide](https://rubygems.org/pages/download). Otherwise, run the following command:

```bash
$ gem install jekyll
```

If this fails on **Ubuntu**, you probably need to install `ruby-dev` system package. Do not use jekkyl package from apt, as its very old.

For more information on how to install Jekyll, see the [official documentation](https://jekyllrb.com/docs/installation/).

After you have installed Jekyll, clone the repository with git:

```bash
$ git clone git@github.com:mergado/docs.git
```

## Basic Usage

Usually, you only need to run the following command which generates HTML files into `./_site`:

```bash
$ jekyll serve
```

This command also runs a built-in development server (at http://localhost:4000/ by default). For more information follow the [official documentation](https://jekyllrb.com/docs/usage/).

If you want to create a new section to appear in the navigation, edit the `_config.yml` in root and run the command for creating a new page, for example:

```bash
$ ruby bin/jekyll-page "Authentication" api
```
