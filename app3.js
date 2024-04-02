const heading = React.createElement("div", {id:"parent", xyz:"abc"},
[React.createElement("div",{id:"child1"},
[React.createElement("h2",{id:"heading1"},"This is first heading"),
React.createElement("h2",{id:"heading2"},"This is second heading")]),
React.createElement("div",{id:"child2"},
[React.createElement("h2",{id:"heading1"},"This is first heading"),
React.createElement("h2",{id:"heading2"},"This is second heading")])]
);

        const root =  ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);

// As u can see it becomes quite tedious for us to do the task if there large number of childrens but this is core javascript code which we can use to create UserInterface using react
// because of this we have another way which is JSX.