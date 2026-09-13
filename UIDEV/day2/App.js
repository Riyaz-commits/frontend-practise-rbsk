import React from "react";
import ReactDOM from 'react-dom/client'


const heading = React.createElement("h1", { id: "heading" }, "Namaste Riyaz ")
const TitleComponent = () => (
    <h2> It is under Heading componenet Riyaz using this was injected as a component under heading</h2>
)

const HeadingComponent = () => (
    <div>

        <h1>Namaste Riyaz Component JSX </h1>
        <TitleComponent />
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)