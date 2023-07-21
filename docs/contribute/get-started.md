---
title: "Get Started"
id: contribute-get-started
description: ""
slug: /contribute-get-started
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 07/14/2023
   author: Patricia McPhee
draft: false
doc_type: overview
displayed_sidebar: contributorGuideSidebar
---

## Prerequisites

- Code editor, [VS Code](https://code.visualstudio.com) is recommended
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com) 


## Clone the repo

1. Clone the repo.  This creates a directory named `customer-docs` in your current working directory.

   ```bash
   git clone https://github.com/gobeyondidentity/customer-docs.git
   cd customer-docs
   ```

2. Next, create a new [branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) from `main` (always give your branch a meaningful, descriptive name). 

   ```bash
   git checkout -b <branch_name> main
   ```

Refer to the [contributor's guide](./contribute.md) for details on how to submit edits or additions to the documentation.

## Start the development server

We're finally able to get to the fun stuff! Install the dependencies and start a local development server:

```bash
yarn
yarn start
```

The `http://localhost:3000` opens in your browser so you can see your changes reflected live. As you make changes to the source files, the preview build will be triggered automatically, and then you can refresh your browser to see the changes.