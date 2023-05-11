[issues]: https://github.com/gobeyondidentity/developer-docs/issues
[conduct]: /docs/contributing-guide/code-of-conduct
[repo]: https://github.com/gobeyondidentity/developer-docs.git
[pr]: https://github.com/gobeyondidentity/developer-docs/pulls

# Contributor's guide

We've built the Beyond Identity documentation with [Docusaurus](https://docusaurus.io), a static-site generator. The source code lives in the [Dev Docs GitHub repo][repo].

You are welcome to contribute to the Beyond Identity developer documentation to help make it better! We want to make it possible for you to become a contributor. Anyone can open an issue about documentation or suggest a change with a [pull request (PR)][pr] to the [GitHub repository][repo]. 

This topic outlines the different ways that you can get involved. In addition, it provides some of the resources that are available to help you get started. All feedback is welcome. 

---

This guide will help you start contributing to Beyond Identity developer documentation! Thank you for taking an interest in contributing. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

### Getting Started

- Before starting your work, ensure an [issue][issues] exists. If not, feel free to create one. 
- Add a comment on the issue and wait for it to be assigned before you start working on it. This helps to avoid multiple people working on similar issues.
- If the solution is complex, propose it and wait for one of the core contributors to approve it before implementing it. This helps in shorter turnaround times in merging PRs.
- For new feature requests, Provide a convincing reason to add this feature. Again, real-life business use cases will be super helpful.

---

## Local Git Repository

### Prerequisites

- [Git](https://git-scm.com) (the below instructions assume you are using the CLI, though [GUI clients](https://git-scm.com/downloads/guis) will also work!)
- Code editor ([Visual Studio Code](https://code.visualstudio.com) is recommended)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

### Cloning the Repository

You will first need to [clone][repo] the repository.

```bash
git clone https://github.com/gobeyondidentity/developer-docs.git
```

This will create a directory named `developer-docs` in your current working directory.

Next, create a new [branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) from `main` (always give your branch a meaningful, descriptive name). 

```bash
git checkout -b <branch_name> main
```

### Starting the Development Server

We're finally able to get to the fun stuff! Install the dependencies and start a local development server:

```bash
yarn
yarn start
```

The `http://localhost:3000` opens in your browser so you can see your changes reflected live.

### Push your changes

When you are ready to submit your changes for review, commit them to your local repository:

``` bash
git add .
```

```bash
git commit -m
```

Then, push them to your fork:

```bash
git push origin <branch_name>
```

You can now [submit your pull request on GitHub][pr]! You are welcome to [open your pull request as a draft](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests) for early feedback and review. Be sure to follow the pull request template!

### Keeping Your Branch Up-to-Date

If there are new commits to the `main` branch of the repository, you can update it by pulling from the 'main' remote:

```bash
git pull origin main
```





## Markdown reference





---






## Before You Get Started<a name="start"></a>

Before contributing a documentation change to the repository, you should be familiar with:

- Git and GitHub: To learn about git and GitHub, refer to the [Github Guides](https://guides.github.com/).
- Slack: The Beyond Identity Documentation team communicates using the Slack application.
- Markdown: We write the Beyond Identity documentation in Markdown. 

In addition to being familiar with the Beyond Identity community and how we work together, you will need to sign the CNCF Contributor License Agreement. The Contributor License Agreement defines the terms under which you contribute to Beyond Identity documentation. Contributions to Beyond Identity documentation are reviewed before being committed to the repository. Committing changes to the Beyond Identity repository requires additional access rights. See ... Also see Participating in Beyond Identity Documentation for more details about roles and permissions.



## Getting Started checklist

If you are ready to get started contributing to the Beyond Identity Documentation repository:

- Verify that you are familiar with the concepts in [Before You Get Started<a name= "start"></a>](#before-you-get-started).
- Familiarize yourself with the [Beyond Identity documentation repository](#the-beyond-identity-documentation-repository).
- Verify that you can open a [pull request and review changes](#sending-a-github-pull-request).
- [Open an issue for Beyond Identity documentation](#opening-an-issue-for-beyond-identity-documentation) if you find a problem.
- Read the [documentation style guide](#documentation-style-guide).


## Helpful resources

- General code guidelines
- UI guidelines
- Beyond Identity learning resources

## Documentation repository

The documentation is managed in a [GitHub repository](https://github.com/beyond-identity/customer-docs).

- Review the site's overall organization and structure
- Review the help files related to your planned changes or addition

## Submitting a GitHub Pull Request

You can provide suggested edits to any documentation page. After you make the changes, you submit updates in a pull request for the Beyond Identity documentation team to review and merge.

1. Make the changes to the file.
2. Scroll to the end of the page and enter a brief description of your change.
3. Optionally enter an extended description.
4. Select **Propose file change**.
5. Select **Create pull request**.

## Open an issue for Beyond Identity documentation

You can request the documentation to be improved or clarified, report an error, or submit suggestions and ideas by opening an issue in GitHub for the Beyond Identity documentation team to address. The team tracks the issues and works to address your feedback.


1. Click the **Open doc issue*- link at the top of the page. 
1. Enter the details of the issue.
1. Click **Submit new issue**.

## Documentation style guide <a name="style"></a>



## Report bugs and enhancements

- Report bugs: Download and try one of the latest Beyond Identity builds. Report any bugs you find by [creating a Beyond Identity bug report in GitHub](https://github.com/Beyond Identity/community/issues/new?assignees=&labels=bug&template=bug_report.md&title=).
- Report enhancements: Got an idea for a feature? Or something you're already using could be improved? [Post an enhancement request in GitHub](https://github.com/Beyond Identity/community/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=)! 

If you have an issue that is specific to a sub-project or community team, feel free to submit an issue against a specific repo.

## Fix issues

- There are many issues and bugs with the label `Good first issue` in the [Beyond Identity GitHub repositories](https://github.com/Beyond Identity/) to help you get familiar with the contribution process. Check out the following list of GitHub repos to make your contribution! 
   - [Beyond Identity sub-projects repositories](https://github.com/Beyond Identity/community/blob/master/README.md#Beyond Identity-sub-projects)
   - [Beyond Identity operations squads repositories](https://github.com/Beyond Identity/community/blob/master/README.md#Beyond Identity-operations-squads)
   
  When you decide to work on an issue, check the comments on that issue to ensure that it's not taken by anyone. If nobody is working on it, comment on that issue to let others know that you want to work on it to avoid duplicate work. The squad can assign that issue to you and provide guidance as well. 

- You can also reach out to the [Beyond Identity squads on Slack](https://github.com/Beyond Identity/community/blob/master/README.md# Slack) to check with the squads if there is any good starter issue that you can work on. 

## Submit a Pull Request 

All code in Beyond Identity aligns with the established [licensing and copyright notice guidelines](https://github.com/Beyond Identity/zlc/blob/master/process/LicenseAndCopyrightGuidance.md).

Before submitting a Pull Request, review the general Beyond Identity [Pull Request Guidelines](https://github.com/Beyond Identity/community#pull-request-guidelines) and make sure that you provide the information that is required in the Pull Request template in that specific repo. 

All Beyond Identity commits need to be signed by using the [Developer's Certificate of Origin 1.1 (DCO)](https://developercertificate.org/), which is the same mechanism that the Linux® Kernel and many other communities use to manage code contributions. You need to add a `Signed-off-by` line as a part of the commit message. Here is an example `Signed-off-by` line, which indicates that the submitter accepts the DCO:

```Signed-off-by: John Doe <john.doe@hisdomain.com>```

You can find more information about DCO signoff in the [zlc repo](https://github.com/Beyond Identity/zlc/edit/master/CONTRIBUTING.md). 

## Report security issues

Please direct all security issues to `Beyond Identity-security@lists.openmainframeproject.org`. A member of the security team will reply to acknowledge receipt of the vulnerability and coordinate remediation with the affected project.

## Contribution guidelines 

Check out the contribution guidelines for different components and squads to learn how to participate.
  - [Beyond Identity CLI](https://github.com/Beyond Identity/Beyond Identity-cli/blob/master/CONTRIBUTING.md)
  - [Beyond Identity API Mediation Layer](https://github.com/Beyond Identity/api-layer/blob/master/CONTRIBUTING.md)
  - [Beyond Identity Application Framework](https://github.com/Beyond Identity/zlux)  
  - [Beyond Identity Explorer](https://github.com/Beyond Identity/vscode-extension-for-Beyond Identity/blob/master/CONTRIBUTING.md)
  - [Beyond Identity Client SDKs](https://github.com/Beyond Identity/Beyond Identity-cli/blob/master/docs/SDKGuidelines.md)
  - [Beyond Identity Docs](./contributing)

## Promote Beyond Identity

- Contribute a blog about Beyond Identity. Read the [Beyond Identity blog guidelines](https://github.com/Beyond Identity/community/blob/master/blogging/blog_guidelines.md) to get started. 
- Present Beyond Identity on conferences and social channels