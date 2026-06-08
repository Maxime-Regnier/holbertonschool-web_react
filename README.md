# 🔷 Holberton Web React — TypeScript

> A progressive series of TypeScript exercises covering interfaces, classes, generics, namespaces, declaration merging, and ambient type declarations — built during the Holberton School Full-Stack curriculum.

![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)
![Webpack](https://img.shields.io/badge/Bundler-Webpack%205-8DD6F9?logo=webpack&logoColor=black)
![ESLint](https://img.shields.io/badge/Linter-ESLint-4B32C3?logo=eslint&logoColor=white)
![Node.js](https://img.shields.io/badge/Runtime-Node.js%2018+-339933?logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Holberton School](https://img.shields.io/badge/Holberton-School-red)

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Tasks](#-tasks)
- [Technologies](#-technologies)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Branch Strategy](#-branch-strategy)
- [Code Documentation](#-code-documentation)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 🎯 Project Overview

**Holberton Web React** is a collection of TypeScript exercises that build strong typing fundamentals. Each task is self-contained with its own Webpack config, ESLint rules, and `tsconfig.json`. The focus is on writing correct, type-safe code rather than a UI framework.

Key concepts covered:

- ✅ TypeScript interfaces and type annotations
- ✅ Class definitions with optional and readonly properties
- ✅ Generics and type constraints
- ✅ Namespaces and declaration merging
- ✅ Ambient type declarations (`.d.ts` files)
- ✅ Working with third-party JavaScript modules from TypeScript

---

## 📚 Tasks

### Task 0 — Student Interface & Table Rendering

Define a `Student` interface with `firstName`, `lastName`, `age`, and `location`. Create two student objects and render them into an HTML table using plain TypeScript + DOM manipulation (no framework).

**Key concepts:** Interfaces, DOM typing, basic TypeScript setup with Webpack + Babel.

---

### Task 1 — Teacher Interface & Extension

Build a `Teacher` interface with readonly `firstName`/`lastName`, optional `contract` field, and an index signature for arbitrary extra properties. Extend it with a `Directors` interface adding `numberOfReports`.

**Key concepts:** `readonly` properties, optional fields (`?`), index signatures, interface extension (`extends`).

---

### Task 2 — Print Teacher Function & Class Interface

Implement a `printTeacher` function (returns "F. LastName" format) and describe it with a function interface. Define a `StudentClass` interface and implement it as a class with `workOnHomework()` and `displayName()` methods.

**Key concepts:** Function interfaces, class interfaces, implementing interfaces with classes.

---

### Task 3 — Ambient Declarations & JavaScript Interop

Write ambient type declarations (`.d.ts`) for an existing JavaScript CRUD module. The declarations describe `insertRow`, `updateRow`, and `deleteRow` functions. Use them from TypeScript with full type safety.

**Key concepts:** `.d.ts` ambient declaration files, `RowID` and `RowElement` types, triple-slash directives.

---

### Task 4 — Namespaces & Subject Classes

Organize code into a `Subjects` namespace. Create a `Teacher` interface and three subject classes (`Cpp`, `Java`, `React`) that use **declaration merging** to add subject-specific teacher attributes. Each class has `getRequirements()` and `getAvailableTeacher()` methods.

**Key concepts:** Namespaces, declaration merging, class inheritance, triple-slash `<reference path>` imports.

---

### Task 5 — Brand Convention & Nominal Typing

Simulate nominal typing in TypeScript (which is structurally typed by default) using a "brand" pattern. Define `MajorCredits` and `MinorCredits` interfaces with a `brand` property and `sumMajorCredits` / `sumMinorCredits` functions.

**Key concepts:** Nominal typing simulation, branded types, preventing accidental type mixing.

---

## 🛠 Technologies

| Technology | Version | Purpose |
|---|---|---|
| **TypeScript** | 4.x | Typed superset of JavaScript |
| **Webpack** | 5.x | Module bundler and dev server |
| **Babel** | 7.x | TypeScript transpilation |
| **ESLint** | 7.x | Code quality and style |
| **Node.js** | 18.x+ | Runtime |
| **npm** | 8.x+ | Package manager |

---

## ⚙️ Prerequisites

- **OS:** Linux (Ubuntu 20.04+), macOS, or Windows with WSL2
- **Node.js:** 18.x or higher
- **npm:** 8.x or higher

```bash
node --version   # >= 18
npm --version    # >= 8
```

---

## 🚀 Installation

Each task is a standalone project. Install dependencies per task:

```bash
# Clone the repository
git clone https://github.com/Maxime-Regnier/holbertonschool-web_react.git
cd holbertonschool-web_react

# Navigate to a task
cd TypeScript/task_0

# Install dependencies
npm install
```

---

## 💡 Usage

### Build and serve with Webpack dev server

```bash
# Inside any task directory
npm run build

# Or start the dev server (live reload)
npm start
```

### Run ESLint

```bash
npm run lint

# Auto-fix
npm run lint -- --fix
```

### Type-check without building

```bash
npx tsc --noEmit
```

---

## 📂 Project Structure

```
holbertonschool-web_react/
│
├── TypeScript/
│   ├── task_0/                     # Student interface & table rendering
│   │   ├── js/main.ts
│   │   ├── tsconfig.json
│   │   ├── webpack.config.js
│   │   ├── .eslintrc.js
│   │   └── package.json
│   │
│   ├── task_1/                     # Teacher & Directors interfaces
│   │   ├── js/main.ts
│   │   └── ...
│   │
│   ├── task_2/                     # Function & class interfaces
│   │   ├── js/main.ts
│   │   └── ...
│   │
│   ├── task_3/                     # Ambient declarations for JS CRUD module
│   │   ├── js/
│   │   │   ├── main.ts
│   │   │   ├── interface.ts
│   │   │   ├── crud.js              # JS module (no types)
│   │   │   └── crud.d.ts            # Ambient declarations
│   │   └── ...
│   │
│   ├── task_4/                     # Namespaces & subject classes
│   │   ├── js/
│   │   │   ├── main.ts
│   │   │   └── subjects/
│   │   │       ├── Teacher.ts
│   │   │       ├── Subject.ts
│   │   │       ├── Cpp.ts
│   │   │       ├── Java.ts
│   │   │       └── React.ts
│   │   └── ...
│   │
│   └── task_5/                     # Branded types
│       ├── js/main.ts
│       └── ...
│
└── README.md
```

---

## 🌿 Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Stable, production-ready code |
| `develop` | Active development |
| `testing` | Integration testing |

---

## 📚 Code Documentation

All TypeScript functions and interfaces are documented with **TSDoc** comments:

```typescript
/**
 * Returns a formatted teacher name string.
 *
 * @param firstName - The teacher's first name.
 * @param lastName - The teacher's last name.
 * @returns A string in the format "F. LastName".
 *
 * @example
 * printTeacher("John", "Doe"); // "J. Doe"
 */
export const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName[0]}. ${lastName}`;
```

ESLint is configured with TypeScript-aware rules across all tasks.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit with clear messages (`git commit -m 'feat: add nominal typing task'`)
4. Push and open a Pull Request to `develop`

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Maxime Regnier**  
Holberton School Student — France  
GitHub: [@Maxime-Regnier](https://github.com/Maxime-Regnier)  
LinkedIn: [maxime-régnier](https://www.linkedin.com/in/maxime-régnier/)

---

**Built with ❤️ at Holberton School France**
