const parent = document.getElementById("parent");

const createElementWithClass = (type, classList) => {
  const newElement = document.createElement(type);
  newElement.classList = classList;
  return newElement;
};

const splitContainer = (parent) => {
  const container = parent.appendChild(
    createElementWithClass("div", "resizeable-container")
  );
  const firstSplit = container.appendChild(
    createElementWithClass("div", "resizeable-content")
  );
  const divider = container.appendChild(
    createElementWithClass("div", "resizeable-handle")
  );
  const secondSplit = container.appendChild(
    createElementWithClass("div", "resizeable-content")
  );
};

splitContainer(parent);
