import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", {id: "heading"}, "Hello World !");
// when nested
/* <div id="parent">
    <div id="child">
        <h1>Hello</h1>
        <h2>World !</h2>
    </div>
</div> */

// when multiple children
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Hello"), React.createElement("h1", {}, "World !")]
    )
);


// sigle line
// const heading = <h1 id="heading">Hello World !</h1>

// multi line - variable
const Title = () => (
    <h1 id="title">
        Title {content}
    </h1>
)

const content = (
    <div>
        this is content
    </div>
)

// functional component
const HeadingComponent = () => (
    <div>
        {/* //component inside component (Compnent composition) */}
        {Title()}
        <Title></Title>
        <Title/>
        {/* javascript inside jsx */}
        {content} {100 + 200} {console.log("Hello World !")}
        <h1 className="heading">Hello World Functional Component !</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// rendering functional component in DOM
root.render(<HeadingComponent />);