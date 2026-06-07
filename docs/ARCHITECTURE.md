# Architecture

## Problem

Students need safer, more organised ways to list, search, save, and manage second-hand campus marketplace items.

## System Context

```mermaid
C4Context
  title Student Marketplace API Context
  Person(user, "User", "Uses the application or API")
  System(app, "Student Marketplace API", "Portfolio-grade software project")
  System_Ext(cloud, "Cloud Platform", "Hosting, database, logs, and deployment")
  Rel(user, app, "Uses")
  Rel(app, cloud, "Deploys to / depends on")
```

## Main Components

- UI or API layer
- Application service layer
- Data access layer
- Database or cloud data store
- CI/CD pipeline
- Deployment and monitoring

## Engineering Tradeoffs

- Keep the first version small enough to finish.
- Document future production improvements separately.
- Prefer boring, understandable architecture over unnecessary complexity.
