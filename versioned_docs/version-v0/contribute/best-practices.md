---
title: "Best practices"
id: best-practices
description: ""
slug: /best-practices
pagination_next: null
pagination_prev: null
last_update: 
   date: 07/18/2023
   author: Patricia McPhee
draft: false
doc_type: overview
displayed_sidebar: contributorGuideSidebar
---

To promote consistency, follow the guidelines below and mentioned throughout to keep the process productive and beneficial for all involved.

### Content development

- Verify your content for technical accuracy before submitting your Pull Request.

- Consult with the Sr. Technical Writer when adding topics or want to propose changes to the content structure. The Sr. Technical Writer maintains the content's quality, reduces duplication, and provides a consistent user experience. They can also strategize how to deliver complex information—for example, adding an explainer video (<90 secs) can help with complex scenarios or issues.

### GitHub

- Create a *working branch* when introducing logically related changes. This helps you manage your changes through the workflow. We refer to it here as a working branch because it's a workspace to iterate or refine your changes until they can be integrated into the default branch.

- Keep your branch up-to-date.

- Check and remove unused personal branches periodically for easy maintenance. Usually, when your branch is merged, you can safely delete it.

### Commit messages

Ensure that your commit message is a proper sentence. Refer to this [guide on writing good commit messages](https://cbea.ms/git-commit/).

A properly formed git commit subject line should always be able to complete the following sentence:

***If applied, this commit will ....***


### Pull Requests

- Try to make the review cycle short.

- Make sure the markdown follows the style guidelines of this project.

- Perform a self-review of your markdown, especially spelling errors.

- Verify that the PR does not generate new warnings before pushing your changes. The best way is to run the clear command.
  
  ```nodejs
  npm run clear
  yarn build
  ```