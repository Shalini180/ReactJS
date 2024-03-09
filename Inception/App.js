// // Example 1 : Basic react structure

// const headingReact = React.createElement("h1",
// {id : "heading1"},
// "Hello World from React!");

// const rootReact = ReactDOM.createRoot(document.getElementById("root"))

// rootReact.render(headingReact);

// Example 2: Nested Divs

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
]);

const rootReact = ReactDom.createRoot(document.getElementById("root"));
rootReact.render(parent);
