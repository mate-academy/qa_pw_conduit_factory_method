import { test as base } from '@playwright/test';
import { UserFactory } from '../../src/factoryItems/UserFactory';
import { UserSettingsFactory } from '../../src/factoryItems/UserSettingsFactory';
import { ArticleFactory } from '../../src/factoryItems/ArticleFactory';

type Factories = {
  user: UserFactory;
  userSettings: UserSettingsFactory;
  article: ArticleFactory;
};

export const test = base.extend<{
  factories: Factories;
}>({
  factories: async ({}, use) => {
    const factories: Factories = {
      user: new UserFactory(),
      userSettings: new UserSettingsFactory(),
      article: new ArticleFactory(),
    };

    await use(factories);
  },
});
