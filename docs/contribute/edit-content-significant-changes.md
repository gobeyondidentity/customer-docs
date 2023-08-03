---
title: "Edit content (significant changes)"
id: edit-content-significant-changes
description: ""
slug: /edit-content-significant-changes
pagination_next: contribute/create-pull-request
pagination_prev: null
last_update: 
   date: 08/03/2023
   author: Patricia McPhee
draft: false
doc_type: how-to
displayed_sidebar: contributorGuideSidebar
---

<!-- Reference links -->
[style-guide]: ./style-guide.md
[markdown]: ./markdown-reference.md
[contributor]: ./contribute.md
[site]: https://docs.beyondidentity.com/
[issues]: https://github.com/gobeyondidentity/customer-docs/issues
[repo]: https://github.com/gobeyondidentity/customer-docs
[pr]: https://github.com/gobeyondidentity/customer-docs/pulls
[enhancements]: https://github.com/gobeyondidentity/customer-docs/issues/new?assignees=&labels=%F0%9F%8C%9F+enhancement&projects=&template=enhancement.yml
[get-started]: ./get-started.md


If you need to make substantial changes, add an image or add a section to a topic. 

On the other hand, if your change is minor that doesn't involve uploading a file or making changes to multiple files, follow the [Edit content - minor change](./edit-content-minor-changes) instructions instead.

## Prerequisites

- Ensure you've [set up your environment](get-started.md).

- Make sure to consult with the Sr. Technical Writer when proposing changes. 

  The Sr. Technical Writer maintains the content's quality, reduces duplication, and provides a consistent user experience. They can also strategize how to deliver complex information—for example, adding an explainer video (<90 secs) can help with complex scenarios or issues.

## 1. Propose your changes

1. Make sure you're back on the main (default) branch so you can sync your local working branch.

   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a working branch for your proposed changes. For example, **content-dev-faqs** or **update-visual-guidelines**.

   ```bash
   git checkout -b {your-branch-name}
   ```

3. Navigate to `/docs` and locate the topic you want to change. 

4. Change the date in the metadata and ensure the title, description, and author are correct. Add any additional keywords if they are missing.

   Keywords are optional but helpful. All other metadata is required.

   :::note important
   The `author` metadata value is the Subject Matter Expert (Engineer, Developer, or Product Manager) rather than the Technical Writer.
   :::

   ```markdown
   ---
   title: Threat Dashboard
   id: threat-dashboard
   description: 'The threat dashboard provides easy-to-use and intuitive threat intelligence analytics. This new dashboard will help you identify users, passkeys, and authentications that have displayed some risk over the last 0-90 days. Risky entities are added to low, medium, and high groups based on their score from 0-100. You can filter the view of this dashboard and the accompanying table based on these groups.'
   slug: /threat-dashboard
   keywords: 
    - threat dashboard
   pagination_next: null
   pagination_prev: null
   last_update: 
      date: 07/26/2023  
      author: John Canneto  
   draft: false
   doc_type: overview
   displayed_sidebar: secureWorkforceSidebar
   ---
   ```

5. Make your changes to the content and run the following command to build and review your changes.

   ```bash
   yarn start
   ```

   This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server. If a browser window doesn't open, go to **http://localhost:3000/** to view your local changes. 

6. Perform a self-review of your markdown and make sure your changes or additions follow the [style guidelines](./style-guide.md).

7. Verify that the PR won't generate warnings or errors, such as broken links. If so, address them and ensure it builds without issues.
  
   ```bash
   npm run clear
   yarn build
   ```

8. When you're ready to submit a pull request, add your changes.

   ```bash
   git add --all
   ```

9. Commit your changes with a descriptive summary, for example, *Add clarity to the data table component usage examples*.

   ```bash
   git commit -m "short description of the change"
   ```

   Ensure that your commit message is a proper sentence. Refer to this [guide on writing good commit messages](https://cbea.ms/git-commit/).

   A properly formed git commit subject line should always be able to complete the following sentence:

   ***If applied, this commit will ....***

10. Publish, or push, your changes to the main repo for merging. 

   ```bash
   git push origin {your-branch-name}
   ```

## 2. Create a Pull Request

Now that you've proposed and committed your changes, you must ask the owners to review your changes, which is done using a pull request (PR). 

1. Go to the main page of the repo, and in the yellow banner, click **Compare & pull request** to create a pull request for the associated branch.  <br />

   ![Compare and pull request](./images/github-compare-and-pull-request.png)

1. In the Open a pull request window, do the following:

   1. Select the branch.  

     :::note important  
     Always open all pull requests against the `main` branch unless it's for the upcoming next release. In that case, the PR should be opened against the `docs-staging` branch. In our example below, the branch that you are currently in is `active-development` and you want to merge it into the `main` branch.
     :::

   1. Ensure that the summary title is short but descriptive. If it is associated with a JIRA ticket, append it to the beginning in brackets, for example, **[MD-111] mac desktop login**. 

   1. Describe your changes. For more details, see [PR descriptions](./create-pull-request#pr-descriptions).

   1. In the **Reviewers** section, in the right panel, click the cog icon and select designated reviewers—for example, another PM, a developer, and the technical writer. 

   1. Assign the PR to a specific reviewer if they are the main reviewer.  

   1. Select **Create pull request**.  

     :::tip
     If the pull request is a **work in progress** and not ready to be reviewed, select the **[Create draft pull request](https://github.blog/2019-02-14-introducing-draft-pull-requests/#tag-your-work-in-progress)**. The difference is that the reviewers only get notified when the PR is *Open* rather than *Draft*.
     :::

   ![Screenshot of the Open a pull request window in GitHub highlighting a) the comparing branches selected, b) pull request summary, c) description of changes, 4) select reviewers, 5) select assignees, and 6) click the Create pull request button.](./images/open-pull-request.png)

That's it! Team members will review your PR and merge it when approved. You may get feedback requesting changes.