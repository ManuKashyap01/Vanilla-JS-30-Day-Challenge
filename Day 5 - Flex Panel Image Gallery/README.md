# Vanilla Js 30 Day Challenge - Day 2 CSS + JavaScript Clock Challenge

This is a solution to the Javascript Drum kit challenge.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- see a gallery of images
- click each panel to see the full content

### Screenshot

![](./screenshot.png)

### Links

- [Solution URL](https://github.com/ManuKashyap01/Vanilla-JS-30-Day-Challenge)
- [Live Site URL](https://day-5-flex-image-gallery.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- JavaScript
- CSS custom properties
- Flexbox
- CSS classes


### What I learned

Javascript logic to update classes to show and hide content of each panel:

```
function toggleUpdate(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active')
    }
}
```

CSS class styles to hide and display content when panel has open-active class or not
```
.panel > *:last-child {
  transform: translateY(100%);
}
.panel.open-active > *:last-child {
  transform: translateY(0);
}
.panel > *:first-child {
  transform: translateY(-100%);
}
.panel.open-active > *:first-child {
  transform: translateY(0);
}
```

## Author

- Frontend Mentor - [@ManuKashyap01](https://www.frontendmentor.io/profile/ManuKashyap01)
- Github - [@ManuKashyap01](https://github.com/ManuKashyap01)
- Linkedin - [@manu-kashyap](https://www.linkedin.com/in/manu-kashyap/)
