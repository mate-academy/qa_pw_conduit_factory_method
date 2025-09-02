import { test as base } from '@playwright/test';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { InternalViewArticlePage } from '../../src/ui/pages/article/view/InternalViewArticlePage';
import { ArticleFactory } from '../../src/factoryItems/ArticleFactory'

export const test = base.extend<{
  articleWithoutTags;
  articleWithOneTag;
  createArticlePage;
  internalViewArticlePage;
  articleFactory;
  article;
}>({
  factories: async ({}, use) => {
    const factoriesObjects = {
      articleFactory: new ArticleFactory(),
    }
    await use(factoriesObjects)
  },
  articleWithoutTags: async ({ factories }, use) => {
    const createdArticle = factories.articleFactory.generateArticle();
    await use(createdArticle);
  },
  articleWithOneTag: async ({ factories }, use) => {
    const createdArticleWithOneTag = factories.articleFactory.generateArticle(1);
    await use(createdArticleWithOneTag);
  },
  article: async ({ factories }, use) => {
    const article = factories.articleFactory;
    await use(article);
  },
  createArticlePage: async ({ page }, use) => {
    const createArticlePage = new CreateArticlePage(page);

    await use(createArticlePage);
  },
  internalViewArticlePage: async ({ page }, use) => {
    const viewArticlePage = new InternalViewArticlePage(page);

    await use(viewArticlePage);
  },

});
