//                                    for single element
// const heading = React.createElement(
//   "h1",
//   //tag
//   { id: "heading" },
//   //attributes
//   "Hello world from react!"
//   //children
// );
// // CDN link for react is getting used here

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // CDN link for react Dom is getting used here

// root.render(heading);
// // root takes object turns into tag and puts into root.

// console.log(heading, "<- it returns a object not an html tag");

//                                    for nested elements
const Parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", { class: "headings" }, "first element"),
    React.createElement("h1", { class: "headings" }, "second element"),
    React.createElement("h1", { class: "headings" }, "third element"),
  ])
);

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(Parent);
