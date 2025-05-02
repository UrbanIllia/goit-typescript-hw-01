type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

/*
 * ┌─────────────────────────────┐
 * │    Hello Mr. Mentor! 😊     │
 * │   Дякую за перевірку 💻     │
 * │   Маю надію, ви скажете:     │
 * │   Виходить ми молодці?) 😊  │
 * │   Have a great day ahead!   │
 * └─────────────────────────────┘
 */
