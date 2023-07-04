//@ts-check
const containerDiv = document.getElementById("parent");

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
  /**@type {HTMLElement} */
  const divider = container.appendChild(
    createElementWithClass("div", "resizeable-handle")
  );
  const secondSplit = container.appendChild(
    createElementWithClass("div", "resizeable-content")
  );
  const mouseDown = (e) => {
    /**
     *
     * @param {MouseEvent} e
     */
    const mouseMove = (e) => {
      container.setAttribute('style', `grid-template-columns: ${e.offsetX}px 14px auto;`)
      console.log(firstSplit)
    };
    container.addEventListener("mousemove", mouseMove);
    container.addEventListener(
      "mouseup",
      (e) => {
        container.removeEventListener("mousemove", mouseMove);
      },
      { once: true }
    );
    const click = { x: e.clientX, y: e.clientY };
    const loc = { x: divider.offsetLeft, y: divider.offsetTop };
    console.log(click, loc);
  };
  console.log(divider);
  divider.addEventListener("mousedown", mouseDown);
};

splitContainer(containerDiv);
