export class ArticleFactory {
  generateArticle(tagsCount = 0) {
    const tags = [];
    if (tagsCount > 0) {
      for (let i = 0; i < tagsCount; i++) {
        tags.push(`tag${i + 1}`);
      }
    }
    return {
      id: `id${Math.random().toString().slice(2, 8)}`,
      title: `Title ${Math.floor(Math.random() * 100)}`,
      description: `Description ${Math.floor(Math.random() * 100)}`,
      text: `Text ${Math.floor(Math.random() * 100)}`,
      tags: tags,
    };
  }
}
