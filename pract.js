function app(){
    return React.createElement("p",{id:"p-tag"},"my name is naveed ali from nanded")
}

ReactDom.createRoot(document.getElementById("total")).render(React.createElement(app));
