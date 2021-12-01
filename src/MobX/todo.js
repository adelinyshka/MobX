import { makeAutoObservable } from 'mobx';

class Todo {
  todos = [
    { id: 1, title: 'Learn MobX', done: true },
    { id: 2, title: 'Create App', done: true },
    { id: 3, title: 'Upload to Netlify', done: true },
  ];

  alerts = {
    duplicateAlert: false,
    voidTitleAlert: false,
  };
  constructor() {
    makeAutoObservable(this);
  }

  toggleTitleAlert(value) {
    this.alerts.voidTitleAlert = value;
  }
  toggleDuplicateAlert(value) {
    this.alerts.duplicateAlert = value;
  }

  addTodo(title) {
    if (
      this.todos.some(item => item.title.toLowerCase() === title.toLowerCase())
    ) {
      this.toggleDuplicateAlert(true);
      setTimeout(() => {
        this.toggleDuplicateAlert(false);
      }, 4000);
      return;
    }

    if (title.length) {
      this.toggleTitleAlert(false);
      this.todos.push({
        id: this.todos.length + 1,
        title: title,
        done: false,
      });
    } else this.toggleTitleAlert(true);

    setTimeout(() => {
      this.toggleTitleAlert(false);
    }, 4000);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  }
}

export default new Todo();
