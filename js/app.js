$(function () {
  $(".simple-marquee-container").SimpleMarquee();
});

$(function () {
  $.fn.SimpleMarquee.defaults = {
    autostart: true,
    property: "value",
    onComplete: null,
    duration: 30000,
    padding: 10,
    marquee_class: ".marquee",
    container_class: ".simple-marquee-container",
    sibling_class: 0,
    hover: true,
    velocity: 0,
    direction: "left",
  };
});
