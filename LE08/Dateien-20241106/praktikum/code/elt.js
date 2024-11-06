function elt (type, attrs, ...children) { 
  let node = document.createElement(type) 
  Object.keys(attrs).forEach(key => { 
    node.setAttribute(key, attrs[key]) 
  }) 
  for (let child of children) { 
    if (typeof child != "string") node.appendChild(child) 
    else node.appendChild(document.createTextNode(child)) 
  } 
  return node 
}