import { faker } from '@faker-js/faker';

export class ArticleFactory {
  generateArticle(options = {}) {
    const article = {};

    article.title = options.title ?? this.generateTitle();
    article.description = options.description ?? this.generateDescription();
    article.text = options.text ?? this.generateText();
    article.tags =
      Array.from({ length: options.tags }, () => faker.lorem.word()) ?? [];

    return article;
  }


  generateTitle() {
    return faker.lorem.words(5)
  }

  generateDescription() {
    return faker.lorem.sentence(4)
  }

  generateText() {
    return faker.lorem.sentences(2)
  }
}
