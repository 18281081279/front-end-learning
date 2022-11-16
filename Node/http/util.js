const renderHTML = (url) => {
  switch (url) {
    case "/home":
      return "home";
    case "/hello":
      return "hello";
    case "/list":
      return `${{ a: 1, b: 2, c: 3 }}`;
    default:
      return "index";
  }
};

const renderStatus = (url) => {
  const urls = ["/home", "/hello", "/list", "/"];
  return urls.includes(url) ? 200 : 404;
};

export { renderHTML, renderStatus };
