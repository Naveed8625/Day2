function app(){
    return React.createElement(table)
}

 function table(){
return React.createElement("table",{id:"main"},
React.createElement("tr",{},
React.createElement("th",{},"sr"),
React.createElement("th",{},"Name"),
React.createElement("th",{},"City"),
React.createElement("th",{},"Age"),
),
React.createElement("tr",{},
React.createElement("td",{},"1"),
React.createElement("td",{},"Ali"),
React.createElement("td",{},"Nanded"),
React.createElement("td",{},"25"),
),
React.createElement("tr",{},
React.createElement("td",{},"2"),
React.createElement("td",{},"Taleb"),
React.createElement("td",{},"Purna"),
React.createElement("td",{},"35"),
),
React.createElement("tr",{},
React.createElement("td",{},"3"),
React.createElement("td",{},"Shadab"),
React.createElement("td",{},"Pune"),
React.createElement("td",{},"30"),
)

)
 }
 ReactDOM.createRoot(document.getElementById("main")).render(React.createElement(app));