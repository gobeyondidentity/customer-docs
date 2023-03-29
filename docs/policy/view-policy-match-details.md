---
title: View policy match details
id: view-policy-match-details
description: ''
slug: /view-policy-match-details
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/29/2023
   author: Patricia McPhee
draft: true
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
---



System administrators can view a history of policy match events along with the policy (the set of rules) that were in effect at the time of the event. This allows administrators to view and also troubleshoot policy matches.

To view the policy associated with the policy event:

1.  From the [Admin Console](/docs/secure-work/workforce-settings/admin-console/admin-console-login), select the **Events** tab.
2.  From the **Events** page, select `Policy` from the **Event** filter drop-down menu.  
    ![](/images/events/policy_event_filter.PNG)
3.  To reduce the number of events displayed, you can apply additional filters such as the **Date Range** and **Policy Version History**. See [Viewing Event Information](/docs/secure-work/events/viewing-event-information) for additional information.
4.  From the **Events** column, locate and select the  event you want to view the event details for.  
    ![](/images/events/policy_select_event.PNG)
5.  From the **Events Details** pane that is displayed, click **View evaluation**.  
    ![](/images/policy/policy_evaluation_match_rule.PNG)

    ## View the Number of Authentications and Device Adds for a Specific Policy Rule


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



<<<<<<< HEAD
## Next steps
=======
#### Related Topics
>>>>>>> 36633339e6dfff21d9987b877f02ac21b7aafe76

[Publishing Rules](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules)

[Policy Attributes](/docs/secure-work/workforce-settings/policy/policy-writing/policy-attributes)

[Writing Policy](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy)

[Viewing Event Information](/docs/secure-work/events/viewing-event-information)