function customRainder(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);

    container.appendChild(domElement);
    */
   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.children;
   for(let key in reactElement.props){
       if(key === 'children') continue;
         domElement.setAttribute(key, reactElement.props[key]);
   }
   container.appendChild(domElement);
}
const reactElement = {
    type: "a",
    props:{
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

typeof reactElement; // object

const mainContainer = document.getElementById("root");
typeof mainContainer; // object

customRainder(reactElement, mainContainer);
typeof customRainder // function

