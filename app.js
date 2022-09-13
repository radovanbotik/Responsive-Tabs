import { getElement } from "./utility/getElement.js";

const widgetControl = getElement(".widget-control");
const widgetHeaderTabs = [...document.querySelectorAll(".widget-header-tab")];
const widgetStoriesArticles = [
  ...document.querySelectorAll(".widget-stories-article"),
];

widgetHeaderTabs.forEach(tab => {
  tab.addEventListener("click", e => {
    widgetHeaderTabs.forEach(tab => {
      tab.classList.remove("active");
    });
    widgetStoriesArticles.forEach(story => {
      story.classList.remove("active");
    });
    const currentTab = e.currentTarget;
    const currentTabID = e.currentTarget.id;

    const currentArticle = widgetStoriesArticles.filter(article => {
      return article.dataset.id === currentTabID;
    });

    currentTab.classList.add("active");
    currentArticle[0].classList.add("active");
  });
});
