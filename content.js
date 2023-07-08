window.onload = function () {
  setInterval(purge, 500);
};

const purge = () => {
  if (isOnVideoPage()) {
    hideVideoRecommendations();
    hideComments();
  }

  if (isOnHomePage()) {
    hideChips();
    hideHomePageRecommendations();
    hideGuide();
    hideGuideLinks();
  }
};

const isOnVideoPage = () => {
  return window.location.pathname.startsWith("/watch");
};

const hideVideoRecommendations = () => {
  let videoRecommendations = document.querySelector("#secondary");
  if (videoRecommendations) {
    videoRecommendations.style.display = "none";
  }
  let relatedVideos = document.querySelector("#related");
  if (relatedVideos) {
    relatedVideos.style.display = "none";
  }
  let descriptionRecommendedVideos = document.querySelector(
    "#structured-description"
  );
  if (descriptionRecommendedVideos) {
    descriptionRecommendedVideos.style.display = "none";
  }
};

const hideComments = () => {
  let comments = document.querySelector("#comments");
  if (comments) {
    comments.style.display = "none";
  }
};

const isOnHomePage = () => {
  return window.location.pathname === "/";
};

const hideHomePageRecommendations = () => {
  let homeRecommendations = document.querySelector("#primary");
  if (homeRecommendations) {
    homeRecommendations.style.display = "none";
  }
};

const hideChips = () => {
  let chips = document.querySelector("#chips");
  if (chips) {
    chips.style.display = "none";
  }
};

const hideGuide = () => {
  hideGuideButton();
  hideGuideItems();
};

const hideGuideButton = () => {
  let guideButton = document.querySelector("#guide-button");
  if (guideButton) {
    guideButton.style.display = "none";
  }
};

const hideGuideItems = () => {
  let miniGuideItems = document.querySelector("ytd-mini-guide-renderer");
  console.log(miniGuideItems);
  if (miniGuideItems) {
    miniGuideItems.style.display = "none";
  }
  let guideItems = document.querySelectorAll("ytd-guide-section-renderer");
  if (guideItems) {
    guideItems.forEach((item) => {
      item.style.display = "none";
    });
  }
  let signInPromo = document.querySelector("ytd-guide-signin-promo-renderer");
  if (signInPromo) {
    signInPromo.style.display = "none";
  }
};

const hideGuideLinks = () => {
  let primaryGuideLinks = document.querySelector("#guide-links-primary");
  if (primaryGuideLinks) {
    primaryGuideLinks.style.display = "none";
  }
  let secondaryGuideLinks = document.querySelector("#guide-links-secondary");
  if (secondaryGuideLinks) {
    secondaryGuideLinks.style.display = "none";
  }
  let copyright = document.querySelector("#copyright");
  if (copyright) {
    copyright.style.setProperty("display", "none", "important");
  }
};
