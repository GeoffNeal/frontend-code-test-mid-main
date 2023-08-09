<img src="https://static.octopuscdn.com/constantine/constantine.svg" alt="Octopus Energy mascot, Constantine" width="100" />

# Octopus Frontend code test

In this code test, you'll be asked to:

- Make a simple React app that follows the design in `design.jpg`, consumes the API and makes the front end tests pass. Ideally the app should be responsive.

## My changes

In an effort to stand out I made some changes to the way this app works...

They are obviously overkill and were not asked for but I wanted to give it a try.

- Made the repo act as a monorepo using [turbo](https://turbo.build/).
- Set up some commit linting and some code linting
- Set up some git hooks using husky

## Improvements

Unfortunately, as I spent so much time on the setup, I think the actual front end did suffer a little.

Here are some things that I would improve upon if I had more time:

- Accessibility sort of took a back seat.
- Completely missed type checking
- Some design patterns I'm not keen on, or missed opportunities to use NextJS features
- The result is mobile only. It will expand to desktop, but will just look like a mobile site on a wide screen.
- I only used vanilla CSS, as I thought at this point I didn't want to run into configuration issues and just wanted to build something.
- Though Redux would definitely have been overkill for this, would've been nice to showcase (and there's plenty of overkill already).
- The setup actually had some issues, which resulted in me having to commit twice because some files didn't actually get committed due to the time taken for prettier to run (I think that's what the issue was anyway).

## Notes

You may see that one of the PRs has hundreds of files, that was due to me messing about with yarn's Zero-Installs. The files are cache files, and I decided that was too many files and removed them and reverted back to using node_modules. I'm not sure it's for me in it's current form, but we'll see what the future holds.

## Getting started

First you'll need to install your dependencies. We've used yarn, if you have another preference feel free to remove the lock file and use what you are comfortable with:

```sh
git clone git@github.com:GeoffNeal/frontend-code-test-mid-main.git
cd frontend-code-test-mid-main
yarn install
```

## Start the app

Because this is now a monorepo you should just be able to run:

```sh
yarn dev
```

without navigating to `client`.

This will do two things:

- Start a Next.js app running in development on <http://localhost:3000>
- Start a graphQL stub server running on <http://localhost:3001/graphql>

## Running tests

You can run tests from the root or client directory.

```sh
yarn test
```
