---
title: "Doc site branches"
id: docs-site-branches
description: ""
slug: /docs-site-branches
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 07/28/2023
   author: Patricia McPhee
draft: false
doc_type: overview
displayed_sidebar: contributorGuideSidebar
---

Before starting the authoring work, you must understand the different branches to work on. You'll use your branch to work on content for a certain issue or feature, but you'll submit your Pull Request against one of the branches listed below: 

- **`main`** - protected branch
    
    Docs for https://deverloper.beyondidentity.com/. This branch contains the most recent stable release content.
    
- **`docs-staging`** - protected branch
    
  Docs for a forward-version that includes features not yet included in the Beyond Identity stable version. When Secure Customer has a release, its `docs-staging` branch will be merged into `main`. Its content is published on https://customer-docs-git-docs-staging-beyondidentity.vercel.app/ for early validation purpose. 
    
- Branches starting with **`release-`** contain archived release documentation for historical tracking, such as `release-xx`.

- **`active-development`** - protected branch (used for front-end and back-end development). 

  Its content is published on https://customer-docs-git-active-development-beyondidentity.vercel.app/ for early validation purpose.
  
* You can have your own personal branch to work on content for a certain issue or feature. However, be sure to check and remove unused personal branches periodically for easy maintenance. Usually when your branch is merged, you can safely delete it.

  