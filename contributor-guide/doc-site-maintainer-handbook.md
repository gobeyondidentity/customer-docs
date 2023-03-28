# Doc site maintainer handbook

## Building the docs for production

You can build the docs with this command:

```
npm run build
```

Running this command will also check the broken links in docs. For more information, see [Checking broken links](#checking-broken-links).

## Testing the build locally

Once `npm run build` finishes, the static files will be generated within the build directory.

You can test the build using this command:

```
npm run serve
```

Now you will be able to visit `http://localhost:3000/` to check the content.

**NOTE.** Broken links get checked during the build. It reports an exhaustive list of broken links that must be fixed before you submit the changes.

Here is an example: 
```
ashleyli@ashleylis-MacBook-Pro-2 docs-site % npm run build

> docs-site@0.0.0 build
> node --max-old-space-size=16384 node_modules/@docusaurus/core/bin/docusaurus build


[en] Creating an optimized production build...

✔ Client
  

✔ Server
  Compiled successfully in 44.28s


✔ Client
  

✔ Server
  

✔ Service Worker
  Compiled successfully in 477.27ms

warn Docusaurus found broken links!

Please check the pages of your site in the list below, and make sure you don't reference any path that does not exist.
Note: it's possible to ignore broken links with the 'onBrokenLinks' Docusaurus configuration, and let the build pass.

Exhaustive list of all broken links found:

- On source page path = /stable/getting-started/user-roadmap-apiml:
   -> linking to ../user-guide/upgrade-zos-system.md (resolved as: /v2.0.x/user-guide/upgrade-zos-system.md)

- On source page path = /stable/troubleshoot/troubleshooting:
   -> linking to troubleshoot-zos.md (resolved as: /stable/troubleshoot/troubleshoot-zos.md)
   -> linking to troubleshoot-zos-services.md (resolved as: /stable/troubleshoot/troubleshoot-zos-services.md)
   -> linking to troubleshoot-diagnostics.md (resolved as: /stable/troubleshoot/troubleshoot-diagnostics.md)

Success! Generated static files in "build".

Use `npm run serve` command to test your build locally.
```

Check the **Exhaustive list of all broken links found:** section and fix all the reported link issues. Where, 

- `On source page path =` indicates the local preview page that contains the broken links. 
- `linking to` entries point to the broken links in the source files. For example, 

```
- On source page path = /stable/troubleshoot/troubleshooting:
   -> linking to troubleshoot-zos.md (resolved as: /stable/troubleshoot/troubleshoot-zos.md)
```

means that in the `docs/troubleshoot/troubleshooting.md` file, there is a link to `troubleshoot-zos.md` which is broken. You can find the file and locate the link to `troubleshoot-zos.md` by searching it and then take action to fix it. 

After all the broken links reported are fixed, run the `npm run build` command again to ensure that the log is clean now. You will see a log like this which does not contain the broken link section: 

```
ashleyli@ashleylis-MacBook-Pro-2 docs-site % npm run build

> docs-site@0.0.0 build
> node --max-old-space-size=16384 node_modules/@docusaurus/core/bin/docusaurus build


[en] Creating an optimized production build...

✔ Client
  

✔ Server
  Compiled successfully in 39.44s


✔ Client
  

✔ Server
  

✔ Service Worker
  Compiled successfully in 486.21ms

Success! Generated static files in "build".

Use `npm run serve` command to test your build locally.
```




## How to update the homepage?

...steps for updating the index (default homepage)...

### About this task

Homepage is composed of the following sections:
- Header
- Banner
  - Beyond Identity Docs
  - Search Bar
- Components
  - Popular Resources
  - Explore Content
  - Discover Your Path
  - Featured Topics
  - Downloadable Files
- Footer

The icons used in all the sections are stored in the `./staic/img` folder. To update the icons, replace with the updated icons with the same name.

### Updating the navigation elements in the header section

1. Navigate to the `/docusaurus.config.js` file and locate the `themeConfig:` > `Items` section.
   The definition of each navigation is specified in the following format:

   ```
   {
      type: "",
      label: "",
      docId: "",
      position: "",
    },
   ```

1. Edit the variables within the `{ }` section of each navigation element.
   For example, to add a navigation element named `Command Reference`, add the following code snippet under the `Items` section.

   ```
   {
      type: "Doc",
      label: "Command Reference",
      docId: "appendix/beyond-identity-cli-command-reference",
      position: "left",
    },
   ```

### Updating Banner: Beyond Identity Docs

- To update the content:
    Navigate to the `/docusaurus.config.js` directory and change the **title** field:
    ```
    module.exports = {
      title: "Beyond Identity Docs",
    ```

- To update the CSS:
  1. Navigate to the `/src/pages/styles.module.css` directory and change the **.heroBanner** submodule:

  ```
  .heroBanner {
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-color: var(--ifm-color-primary);
  color: #ffffff;
  }
  ```

  2. Navigate to the `/src/css/custom.css` directory and change the **.hero__title** submodule.

  ```
  .hero__title {
    font-size: 4rem !important;
    padding-bottom: 3rem;
  }
  ```

### Updating Banner: Search Bar

Navigate to the `/src/css/custom.css` directory and change the **.searchDiv** and **.searchDiv .DocSearch-Button** submodules.

```
/* Landing Page Search Bar */
.searchDiv {
  margin: auto;
  width: calc(var(--ifm-container-width) / 12 * 7);
 }

.searchDiv .DocSearch-Button {
  margin: auto;
  width: 70%;
  height: 45px;
  padding: 0 20px;
  border-radius: 10px;
  color: var(--docsearch-text-color);
 }

[data-theme="dark"] .searchDiv .DocSearch-Button {
  color: var(--docsearch-muted-color);
  }
```

### Updating Components

Each component has an independent subfolder in the `/src/components` directory. Each subfolder contains a `.js` file and a `.css` file to control the content and style for each component.

```
├── src
│   └── pages
│       └──components
│           ├──DiscoverYourPath
│           ├──DownloadableFiles
│           ├──ExploreContent
│           ├──FeaturedTopics
└           └─PopularResources
```

For example:

To update the hyperlink to `Download Beyond Identity` in the the **Popular Resources** section:

1. Navigate to the `/src/components/PopularResources` directory and locate the `PopularResources.js` file.

1. Find the `title: "Download Beyond Identity"` line to identify the right location and update its `link` variable.

```
{
    title: "Download Beyond Identity",
    link: "https://www.beyond-identity.org/download.html",
    icon: "img/download_Beyond Identity-icon.png",
    description: (
      <>
        Beyond Identity has both server and client components, which you can install
        independently.
      </>
    ),
  },
```

### Updating the footer section

1. Navigate to the `/docusaurus.config.js` file and locate the `footer:{ } ` section.
1. Edit the variables.
For example, to update the `Products` section, edit the variables in the following code snippet.
```
{
  title: "Products",
  items: [
    {
      label: "Download",
      href: "https://www.beyond-identity.org/download.html",
    },
    {
      label: "Try Beyond Identity",
      href: "https://www.openmainframeproject.org/projects/beyond-identity/ztrial",
    },
    {
      label: "Features",
      href: "https://docs.beyond-identity.org/stable/getting-started/overview.html",
    },
  ],
},
```

## Particular assets

### ZWE command reference

The ZWE command reference guide is published under References on the doc site. It's updated automatically from the beyond-identity-install-packaging repo by using GitHub Actions ((https://github.com/beyond-identity/beyond-identity-install-packaging/actions/workflows/zwe-doc-generation.yml)[https://github.com/beyond-identity/beyond-identity-install-packaging/actions/workflows/zwe-doc-generation.yml]). 

- This action runs whenever there is a change to beyond-identity-install-packaging (which is where zwe is defined, so any change to zwe commands will trigger this action).
- This action generates the zwe documentation and creates a PR to the beyond-identity docs-site repo. If there are no changes to zwe, then no PR is created. This is an example PR that was created: https://github.com/beyond-identity/docs-site/pull/2076. Therefore, changes will get merged into staging branch on a consistent basis for the release process.

For Beyond Identity doc maintainers, ensure that you review and merge PRs titled **Update zwe server command reference** from branch **auto-update-zwe-reference** during new release preparation.