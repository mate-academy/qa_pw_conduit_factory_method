import { faker } from '@faker-js/faker';

export class ArticleFactory {
  generateArticle(options = {}) {
    const article = {};

    article.title = options.title ?? this.generateTitle();
    article.description = options.description ?? this.generateDescription();
    article.text = options.text ?? this.generateText();
    const tagsCount = Math.max(0, parseInt(options.tags, 10) || 0);
    article.tags = Array.from({ length: tagsCount }, () => faker.lorem.word());

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
