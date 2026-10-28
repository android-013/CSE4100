# Student Profile Card Application

A beginner React project with six student profile cards, reusable components, props, and a responsive CSS grid.

## How to run

1. Install Node.js.
2. Open a terminal inside the `myApp` folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address shown in the terminal.

## Components

- `App` displays the whole page.
- `Header` shows the title and student count.
- `StudentList` uses `map()` to show six profiles.
- `StudentCard` receives a `student` prop and displays the information.
- `Footer` shows the copyright line.

Student details are kept in `src/data/students.js`. Profile pictures are included in `public/students`, so they also appear without internet access.
