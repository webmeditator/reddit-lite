## Code Structure

The code is structured as semantic as possible. Just like any standard front end projects,
all the configurations files are on the root of the dir. (e.g. webpack, babel)

All the source code is under /src directory. The react components like subreddit-list, subreddit-post are under /src/components directory. Every component have their own test files along with the code file.

### Naming Convention

The naming conventions in this project are also as semantic as possible. The component class names are sentence case but the component directory names are using "-" just to distinguish with class names. 

### CSS Modules

The components are using css modules to import styles along with BEM. This avoid all the css conflicts which can be a nightmare. This is one of my favorite feature of module based architecture.

## State management

I have used MobX to maintain one true state throughout the app. It is a very simple way to gain an immutable shared state across react components.

For example, one of the property of our state is the subreddit posts which can be change via a search action. In MobX store where we maintain the state, we're observing the posts array (e.g. @observer subReddits: []). And one of the action we have which can change the observer is fetch reddits. So, it is declared as @action fetchSubReddits. This means, whenever fetchReddits will be called in our app, it will update all the appropriate observers. This eliminates the hassle of maintaining the state across components.

## Pros and Cons of how the views are rendered

Developed with mobile-first approach. So, it is responsive. It is following a design system with a specific set of colors, spacing, fonts etc.

The views can be make even richer with some animations effects. Like on a hover of a post instead of border, it can use a eye soothing efect. Also, as a next step we could add a preview view of a post. On a click, it should open an overlay with the full view of the post.

## Authentication

I will be using Auth0 to implement the authentication flow that will support logging in either via an e-mail / password mechanism or a Google OAuth login.

The flow will look like this :

Reddit-lite → Auth0 login → Auth0 authenticates user → Auth0 redirects to callback URL → Your App with the toke

For this we will need 2 npm packages :

`npm install auth0-js react-router-dom` (to handle redirection and routing)

We will be handling this via a shared service call it AuthenticationService.js

Following are the props of AuthenticationService class

- login (method)
- logout (method)
- Auth0 (will give a new instance of Auth0)
- setSession (once logged in, will set the tokens in session storage)
- isAuthenticated (getter flag)

So, in our app.js before we load our view we will check the `isAuthenticated` flag. This flag can be used anywhere in the app where we need to impose authentication like commenting on a post.
