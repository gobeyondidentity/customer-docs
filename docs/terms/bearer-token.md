---
id: bearer-token
title: Bearer Token
hoverText: An opaque token sent in the Authorization header when making requests to protected resources. It can be understood as "give access to the bearer of this token."
displayed_sidebar: mainSidebar
---

A Bearer Token is an opaque string used in OAuth 2.0 [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750) generated by the server in response to a login request. Clients must send this token in the Authorization header when making requests to protected resources. 

```
Authorization: Bearer <token>
```

All API requests using bearer tokens must be made over an HTTPS connection, since the request contains a plaintext token that could be used by anyone if it were intercepted. It can be understood as "give access to the bearer of this token."


