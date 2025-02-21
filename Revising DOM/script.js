const parent = document.querySelector(".parent");
console.log(parent);

// children in the parent
const childrens = parent.children; //this gives an html collection similary to array but does not provide loop properties
console.log(childrens);

//can get a single child
const singleChild = childrens[1];

//can get the first and last child from the parent as well
const firstChild = parent.firstElementChild;
console.log(`${firstChild.innerHTML} is the first child of the parent `);

const lastChild = parent.lastElementChild;
console.log(`${lastChild.innerHTML} is the last child of the parent `);

//printing all the loop with the basic for loop
for (let index = 0; index < childrens.length; index++) {
  console.log(childrens[index].innerHTML);
}

///can get to the reverse from child to parent
const child = document.querySelector(".day");

const childToParent = child.parentElement;
console.log(childToParent);

// knowing about childNode
const childNodes=parent.childNodes
console.log(childNodes);
