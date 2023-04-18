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

- See the live clock
- Different hands of the clock should be updated accordingly

### Screenshot

![](./screenshot.png)

### Links

- [Solution URL](https://github.com/ManuKashyap01/Vanilla-JS-30-Day-Challenge)
- [Live Site URL](https://day-2-css-clock.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- JavaScript
- CSS custom properties
- Flexbox
- CSS Gradients


### What I learned

Javascript logic to handle the movement of second-hand of the clock:

```
function setTime(){
    const now=new Date();

     const seconds=now.getSeconds();
     const secDeg=((seconds/60)*360)+90;
     secHand.style.transform=`rotate(${secDeg}deg)`;
}
```

Javascript logic to call the setTime() every one second
```
setInterval(setTime,1000);
```

## Author

- Frontend Mentor - [@ManuKashyap01](https://www.frontendmentor.io/profile/ManuKashyap01)
- Github - [@ManuKashyap01](https://github.com/ManuKashyap01)
- Linkedin - [@manu-kashyap](https://www.linkedin.com/in/manu-kashyap/)
