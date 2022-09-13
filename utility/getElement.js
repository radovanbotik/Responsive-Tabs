const getElement = selector => {
  if (document.querySelector(selector)) {
    return document.querySelector(selector);
  } else {
    console.log(
      `selector ${selector} does not exist,check the selection again.`
    );
  }
};

export { getElement };
