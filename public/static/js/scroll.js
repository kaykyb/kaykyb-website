const body = document.body;

const onWheel = (e) => {
  if (body.offsetWidth > 1000) {
    body.scrollTo({
      left: body.scrollLeft + e.deltaY,
    });
  }
};

body.addEventListener("wheel", onWheel);
