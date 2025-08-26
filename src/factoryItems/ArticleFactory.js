import { faker } from '@faker-js/faker';

export class ArticleFactory {
  generateArticle(options = {}, tagNumber = 0) {
    const article = {
      title: options.title ?? this.generateTitle(),
      description: options.description ?? this.generateDescription(),
      text: options.text ?? this.generateText(),
      tags: options.tags ?? this.generateTags(tagNumber),
    };

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
    return Array.from({ length: tagNumber }, () => faker.lorem.word());
  }
}
