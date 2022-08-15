export const setMetaTags = ({
  title = '스쿨버리',
  description = '배달비를 공유해보세요!',
  imageUrl = '/assets/logo.png',
}) => {
  if (document) {
    //set title
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${title}`);

    //set description
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);

    //set images
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', imageUrl);

    //set url
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', window.location.href);
  }
};
