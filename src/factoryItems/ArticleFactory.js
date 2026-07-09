import { faker } from '@faker-js/faker';

export class ArticleFactory {
  generateArticle(options = {}) {
    const article = {};
    const title = this.generateTitle();
    const description = this.generateDescription();
    const text = this.generateText();
    const tags = this.generateTags(options.tagsCount || 0);


    article.title = title;
    article.description = description;
    article.text = text;
    article.tags = tags;

    return article;
  }

  generateTitle() {
    return faker.lorem.words(5);
  }

  generateDescription() {
    return faker.lorem.sentence(4);
  }

  generateText() {
    return faker.lorem.sentences(2);
  }

  generateTags(tagsCount) {
    return Array.from({ length: tagsCount }, () => faker.lorem.word());
  }
}