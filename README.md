# Readme

A minimum reproduction of a problem I'm having in [another app](https://github.com/mrled/keymap.click).

In short, when using Tailwind on a Next.JS/React app created with `npx create-next-app`,
and running that app in production mode with `npx next build && npx next start`,
React measurements of DOM elements on the initial load are incorrect.
On subsequent page loads or refreshes, React measurements are correct.

I think what is happening is that the initial load is getting measurements before Tailwind styling is applied, while subsequent loads are having Tailwind styling applied first.

## Screenshot

Here's a screenshot. The popup is coming from the Chrome dev tools and is correctly showing 344px high, while the text in the div itself is showing the measurement I made in the React component and is incorrectly showing 298px high.

![Screenshot](docs/screenshot.png?raw=true "Screenshot")

## Video demo

I recorded a video of the behavior being triggered by Tailwind.

[![Video of behavior in detail](https://img.youtube.com/vi/XLFrjlxBWB4/0.jpg)](https://www.youtube.com/watch?v=XLFrjlxBWB4)
