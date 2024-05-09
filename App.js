// const heading = React.createElement("h1", {id: "heading"}, "Hello World !");

/* <div id="parent">
    <div id="child">
        <h1>Hello</h1>
        <h2>World !</h2>
    </div>
</div> */
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Hello"), React.createElement("h2", {}, "World !")]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);