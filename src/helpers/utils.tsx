export const slickSettings = {
  dots: true,
  infinite: true,
  speed: 200,
  autoplay: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

export const htmlMarkup = (html: any) => {
  return {
    // __html: DOMPurify.sanitize(html),
    __html: html,
  };
};
