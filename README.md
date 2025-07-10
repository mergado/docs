# Mergado Apps Documentation

The official documentation for Mergado Apps platform.

This documentation is created with Jekyll ([official documentation](https://jekyllrb.com/docs/usage/)) and then served as GitHub pages.

## Contributing
Much of the complexity of preparing Jekyll _(installing Ruby, dependencies and whatnot)_ is hidden thanks to our Docker-based tooling. Only a few things are required if you want to have these docs served locally:
- `git`
- `docker`

You can clone this repo with git:

```sh
git clone git@github.com:mergado/docs.git mergado-docs
```

### Locally served pages
A convenience Docker-based script for building and serving pages locally is available:

```sh
./bin/local.sh
```

This will run start Jekyll and serve the final site at `http://localhost:4000/` by default.

### Creating new pages
Usually, you only need to run the following command which generates HTML files into `./_site`:

```sh
python ./bin/jekyll-page
```

If you want to create a new section to appear in the navigation, edit the `_config.yml` in root of the repository:
