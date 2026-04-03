# 02240334_WEB101_PA1
Name: Ashis Rai
Student ID: 02240334
Module: WEB101
Date: April 3, 2026


# Github Repo Link
https://github.com/AshisRai503/02240334_WEB101_PA1.git

# Netflix Homepage Clone
- Recreation of Netflix hompage using react.js and vite as dev environment.

## Overview
- This web page is a simplified replica of the Netflix webpage. It has basic features like responsive navigation bar, a hero banner with movie title and action buttons, a hover animation on movie cards and lastly a responsive design for dektop, tablets and mobile.

## Component Architecture
``` bash
02240334_WEB101_PA1/
└── netflix/
    ├── public/
    └── src/
        ├── assets/
        ├── components/
        │   ├── Hero/
        │   ├── MovieCard/
        │   ├── MovieRow/
        │   └── Navbar/
        └── data/
```

## Components Explained
- **Navbar** - Fixed top navigation bar with Netflix logo and Sign In button
- **Hero** - Banner with background image,title and buttons
- **MovieRow** - Displays movies in horizontal and scrollable row of cards.
- **MovieCard** - Reusable card component that displays movie poster with hover effect.

## Data Source
- Movie data is stored in Src/data/movies.js.
- Each movie object conatins an id, .title, image URL and category.
- MovieRow filters movies by category and passes them to MovieCard as props.

## Tech Stack
- React.js
- Vite
- CSS with media queries for responsiveness

## How to Run
```bash
npm install
npm run dev
```
## References
- Netflix.com
- React Documentation: https://react.dev
- Vite Documentaion: https://vitejs.dev






