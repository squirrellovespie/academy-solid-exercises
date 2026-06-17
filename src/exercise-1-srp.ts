// =============================================================
// Exercise 1 – Single Responsibility Principle (SRP)
//
// YOUR TASK:
//   Refactor it so each class has only ONE reason to change.
//   Wire them together so the output at the bottom still works.
//
// Run:  npm run exercise-1
// =============================================================

class BlogPost {
  title: string;
  content: string;
  author: string;

  constructor(title: string, content: string, author: string) {
    this.title = title;
    this.content = content;
    this.author = author;
  }
}

class BlogPostPersistence {
  // Persistence
  saveToDatabase(title: string) {
    console.log(`Saving "${title}" to the database...`);
  }
}

class BlogPostFormatter {
  // Formatting
  renderAsHtml(title: string, author:string, content: string): string {
    return `<h1>${title}</h1><p>By ${author}</p><p>${content}</p>`;
  }
}

class BlogPostNotifier {
  // Notification
  notifySubscribers(title: string) {
    console.log(`Sending email notification for new post: "${title}"`);
  }
}

const post = new BlogPost("SOLID Rocks", "Here is why...", "Alice");
const persistence = new BlogPostPersistence();
const formatter = new BlogPostFormatter();
const notifier = new BlogPostNotifier();
persistence.saveToDatabase(post.title);
console.log(formatter.renderAsHtml(post.title, post.author, post.content));
notifier.notifySubscribers(post.title);
