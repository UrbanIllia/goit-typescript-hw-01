type User = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: User = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: User = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
/*
 * ┌─────────────────────────────┐
 * │    Hello Mr. Mentor! 😊     │
 * │   Дякую за перевірку 💻     │
 * │   Маю надію, ви скажете:     │
 * │   Виходить ми молодці?) 😊  │
 * │   Have a great day ahead!   │
 * └─────────────────────────────┘
 */
