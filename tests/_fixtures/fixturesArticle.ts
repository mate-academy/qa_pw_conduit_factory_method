import { test as base } from './fixturesFactories';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { InternalViewArticlePage } from '../../src/ui/pages/article/view/InternalViewArticlePage';

type Article = {
  title: string;
  description: string;
  text: string;
  tags: string[];
};

export const test = base.extend<{
  articleWithoutTags: Article;
  articleWithOneTag: Article;
  createArticlePage: CreateArticlePage;
  internalViewArticlePage: InternalViewArticlePage;
}>({
  articleWithoutTags: async ({ factories }, use) => {
    await use(factories.article.generateArticle());
  },
  articleWithOneTag: async ({ factories }, use) => {
    await use(factories.article.generateArticle(1));
  },
  createArticlePage: async ({ page }, use) => {
    await use(new CreateArticlePage(page));
  },
  internalViewArticlePage: async ({ page }, use) => {
    await use(new InternalViewArticlePage(page));
  },
});
