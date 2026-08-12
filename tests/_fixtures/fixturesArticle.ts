import { test as base } from '@playwright/test';
import { ArticleFactory } from '../../src/factoryItems/ArticleFactory';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { InternalViewArticlePage } from '../../src/ui/pages/article/view/InternalViewArticlePage';

const articleFactory = new ArticleFactory();

export const test = base.extend<{
  articleWithoutTags;
  articleWithOneTag;
  createArticlePage;
  internalViewArticlePage;
}>({
  articleWithoutTags: async ({}, use) => {
    const article = articleFactory.generateArticle();

    await use(article);
  },
  articleWithOneTag: async ({}, use) => {
    const article = articleFactory.generateArticle({ tags: 1 });

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
