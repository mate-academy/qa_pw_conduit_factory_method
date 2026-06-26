import { faker } from '@faker-js/faker';

export class ArticleFactory {
  generateArticle(tagNumber = 0, options = {}) {
    const article = {};


    article.title = options.title ?? this.generateTitle();
    article.description = options.description ?? this.generateDescription();
    article.text = options.text ?? this.generateText();
    article.tags = options.tags ?? this.generateTags(tagNumber);

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

  generateTags(tagNumber) {
    return Array.from({ length: tagNumber }, () => faker.lorem.word())
  }
}
