---
title: Viewing the Number of Authentications and Device Adds for a Specific Policy Rule
sidebar_position: 2
---

Viewing the Number of Authentications and Device Adds for a Specific Policy Rule
================================================================================

You can filter policy events based on matching criteria. Each rule contains a **Match Count** that provides the number of authentications and/or device adds associated with each rule. .

![](/images/policy/match_count_1.PNG)

Clicking on a match count for a rule opens the **Events** page and filters on the selected policy version and rule. For example, referring to the screen above, clicking on the `number 17` under the **Match Count** for **Rule 7** opens the **Events** page and displays only those events that match the selected policy version rule. In this example, only events matching the current policy version for policy **Rule 7** are displayed.

![](/images/events/events_match_count_version_rule1.png)

The match count numbers for each rule vary based on the selected date range and selected policy version. For example, changing the **Date Range** from the `Last 30 days` to the `Last 12 hours` may change the number of match counts for each rule.

![](/images/policy/match_count_2.PNG)

For example, changing the policy version from the current version to a previous version, displays the match count for the rules in effect for that version.

1.  To change the version, select the **Last published** link.  
    ![](/images/policy/match_count_4.PNG)
2.  Select the appropriate version. The match counts for the rules in effect for the policy version are displayed.  
    ![](/images/policy/match_count_3a.PNG)
3.  To view match count details for this version, click **I want to restore this version**, otherwise, click **Close**.

#### Related Topics

[Publishing Rules](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules)

[Policy Attributes](/docs/secure-work/workforce-settings/policy/policy-writing/policy-attributes)

[Writing Policy](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy)