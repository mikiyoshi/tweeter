# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `nvm install v12` command.
4. Install dependencies using the `npm install` command.
5. Install dependencies using the `npm install express` command.
6. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
7. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above

## Content Distribution Networks / CDN

1. fonts.googleapis.com /Bungee /Source+Sans+Pro
2. font-awesome
3. jquery
4. timeago.js

## SASS install

```
nvm install v12
```

```
npm install -g sass
```

```
npm init
```

```
mkdir sass
```

```
mkdir public
```

```
mkdir public/styles
```

- `npm init` made `package.json` file
- add `script` in `package.json` file
  - "sass-watch": "sass sass:public/styles --watch --poll --no-source-map",
  - this means `sass` folder create CSS to `public/styles` folder

```
npm run sass-watch
```

- automatically create CSS file

## Functional Requirements

    - [x] A client-side Single Page App (SPA)
    - [x] Communicates with a server via AJAX

### Display Requirements

    - [x] Navigation Bar:
        - [x] is fixed to the top
        - [x] has padding on both sides
        - [x] contains Compose button

    - [x] Compose Tweet box:
        - [x] is displayed above the list of tweets
        - [x] contains a form for submitting tweets, which itself contains:
            - [x] a textarea for new tweet content
            - [x] a left-aligned button for submitting new tweets
        - [x] contains a Character Counter, right-aligned, which by default shows 140

    - [x] List of Tweets:
        - [x] displays tweets in reverse-chronological order (that is, by creation time descending)

    - [x] Individual Tweets have a:
        - [x] header, which contains the user's:
            - [x] avatar, on the left
            - [x] name, on the left and after the avatar
            - [x] handle, on the right
        - [x] body, which contains the tweet text
        - [x] footer, which displays:
            - [x] how long ago the tweet was created, on the left
            - [x] "Flag", "Re-tweet" and "Like" action icons on the right

## Behaviour

### Individual Tweets

    - [x] When the user hovers over a tweet, that tweet should display a box shadow.

### Action Icons

    - [x] When the user hovers over an icon ("Flag", "Re-tweet" and "Like") the icon should change colour.

### Character Counter

    - [x] When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)

    - [x] The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)

### Compose Tweet

    - [x] When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed

    - [x] When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)

### Stretch

### Navigation Bar

    - [] When a user clicks the Compose button in the Navigation Bar:
        - [] if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused
        - [] if the Compose Tweet box is currently showing, then it is hidden
        - [] in either case, transitions between 'shown' and 'hidden' states should be animated

### Second Toggle Button

    - [] When a user scrolls a second button appears in the lower right hand corner:
        - [] if the user clicks this button they are brought back up to the top of the page
