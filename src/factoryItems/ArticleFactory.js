import { faker } from '@faker-js/faker';

export class ArticleFactory {
  generateArticle(options = {}) {
    const article = {};

    article.title = options.title ?? this.generateTitle();
    article.description = options.description ?? this.generateDescription();
    article.text = options.text ?? this.generateText();
    article.tags = options.tags ?? this.generateTags(options.tagsCount ?? 0);

    return article;
  }

  generateTitle() {
    return faker.lorem.words(5);
  }

  generateDescription() {
    return faker.lorem.sentence();
  }

  generateText() {
    return faker.lorem.paragraphs(3);
  }

  generateTags(count = 0) {
    return Array.from({ length: count }, () => faker.word.noun());
  }
}
