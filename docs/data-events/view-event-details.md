---
title: View event details
id: view-event-details
description: ''
slug: /view-event-details
keywords: 
 - event details
 - events
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/29/2023
   author: Patricia McPhee
draft: true
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
--- 

The **Events** page provides information on various types of events associated with user and/or device activity. 


Detailed event information can be viewed by clicking on a user in the **PRINCIPAL ACTOR** column. Once clicked the **Event Details** are displayed on the right of the **Events** page.

![](/images/admin/events/eveent_details.PNG)

The event details include information such as:

- Date and time of the event
    
- Event and correlation IDs
    
- User name
    
- Event type
    
- Event status
    
- IP address of the Authenticator
    
- Related IP addresses, if any
    

Additional information includes:

- Details associated with the principal actor including the user type, display name, ID, display ID, Tenant ID, event type, and correlation ID
    
- Details associated with the event data including certificate and client information, device info, and user information
    
- Event outcome
    

The event details can be copied to a file by clicking the icon next to **Other Info**.

![](/images/admin/events/events_other_info.PNG)


To view event details:

1.  From the [Admin Console](../platform/admin-console.md), select the **Events** tab.
2.  The **Events** page displays the following information:
    1.  Date and time the event occurred (**Date & Time**)
    2.  The name of the user associated with the event (**Principal Actor**)
    3.  The type of event that occurred (**Event**)
    4.  The ID associated with the event (**Correlation ID**)  
        ![](/images/events/events_match_count1.PNG)
3.  Various options can be performed from this page. You can:
    1.  View the profile and devices associated with a [specific user](../data-events/view-user-profile.md).
    2.  View details associated with a [specific event](../data-events/view-event-details.md).
    3.  [Search events](../data-events/search-events.md).
	4.	[Filter events](../data-events/filtering-events.md).
    5.  Export [event data](../data-events/exporting-event-data.md).

:::note
Clicking on the **DATE & TIME** column allows events to be displayed in ascending or descending order.
:::

