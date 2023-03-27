# Release notes guide

Learn how Secure Workforce release notes are constructed, how to generate and submit them. 

## Release notes template

The release notes follow a similar pattern for each release. The following template takes v2.76.0 as an example. 

```
## Cloud

We resolved the issue when switching between policy rules, the policy attributes with multiple fields didn't immediately update the values. Instead, showing the values from the previously selected rule.  

## Authenticators

:::info Operating systems supported

The Beyond Identity Authenticator is supported on the following platforms:

- macOS 10.15 (Catalina) or later

- Windows 10 build 19041 and later or Windows 11
:::

We made the Windows Authenticator application more consistent with the Mac version. Windows users tend to close the application more often than Mac users, which has significantly impacted their authentication performance.

Here are the changes we made:

- Renamed **Exit** under the **File** menu of the Authenticator to **Close Beyond Identity**. Selecting this menu item minimizes the Authenticator application to the Windows Task Tray. Likewise, closing the window from the upper right (X) or selecting Close from the Authenticator's system menu minimizes the Authenticator application to the task tray.

  ![app-registration-overview.png](../images/authenticator-file-close-bi.png)

- Renamed **Exit Beyond Identity** to **Shutdown Beyond Identity** in the Windows Task Tray context menu. Right-clicking the application icon in the task tray is now the only way to completely shut down the Windows PA.

  ![app-registration-overview.png](../images/authenticator-task-tray-shutdown-bi.png)

- Changed the message displayed when shutting down the application from the task tray, warning the user that this action may impact authentication.

  ![app-registration-overview.png](../images/authenticator-task-tray-shutdown-bi-2.png)

## Desktop Login



## API



```

## Release notes process

- Before the release is published, run a tool or script to pull updates from different CHANGELOGs into a Markdown file. 
- Copy and move the content into the release notes document. 
- Review the content, check grammar and style, check formatting. 
- Send it to the community (squad leads) to review. 
- Publish the release notes. 

## How to update the release notes



### Recommendations

Project repos can set up CHANGELOGs to record user-facing changes to the repo. Changelog automation aims to improve the accuracy and consistency of Beyond Identity Release Notes and reduces the overhead for dev/doc engineers.

If a CHANGELOG is set up, ensure that it’s properly formatted. For the doc squad to pick up the updates, the following rules MUST be met. 

1. Include an issue or PR number for each entry. This helps users learn more about the change when needed. 

    Example: 
    ```
    Added the validate only mode of Beyond Identity. This allows you to check whether all the component validation checks of the Beyond Identity installation pass without starting any of the components. #1335 
    ```

2. Indicate whether the change is a new feature/enhancement or a bug fix.  This helps users understand quickly what new enhancements are introduced and decide whether to upgrade. 

    We propose one of the following methods to organize content:
    1) For each release, create separate sections for “New features and enhancements” and “Bug fixes” in the CHANGELOG and add updates into the correct section. 

    Example: 
    ```
    1.14.0 
    New features and enhancements
    - Added SSO token name and label to convert-env.sh for use with ZSS. #118 
    
    Bug fixes
    - Fixed app server configuration bug where min worker count was ignored when max worker count was not defined #187
    ```

   2) Use tags to label entries. 

   Example:
   ``` 
   1.14.0 
   - Feature: Added SSO token name and label to convert-env.sh for use with ZSS. #118 
   - Bugfix: Fixed app server configuration bug where min worker count was ignored when max worker count was not defined #187
   ```

We recommend the following writing style for release notes entries:

1. Start the sentence with a verb in past tense. 
   - If a new feature or enhancement, can use “Added...”, “Improved...”, “Enhanced...”;
   - If a bug fix, can use “Fixed...”
2. Write from the user’s perspective. 
    - If a new feature or enhancement, document why this change matters to users (what this feature or enhancement allows the users to do now) . 

    Example: 
    ```
    Added the validate only mode of Beyond Identity. This allows you to check whether all the component validation checks of the Beyond Identity installation pass without starting any of the components. #1335
    ```
   - If a bug fix, state clearly what issue was resolved. 

   Example: 
   ```
   Fixed a bug where the cascading position of new windows were wrong when that application was maximized. #102
   ```

3. Use second person “you” instead of “users”.
