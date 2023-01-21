function app(){
    return React.createElement("p",{id:"p-tag"},"my name is naveed ali")
}

ReactDom.createRoot(document.getElementById("total")).render(React.createElement(app));
//ReactDom.createRoot(document.getElementById("all")).render(React.createElement(app));