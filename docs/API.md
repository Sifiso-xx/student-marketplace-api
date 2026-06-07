# API Documentation

## Overview

This document describes the planned API surface for Student Marketplace API.

## Endpoints

### POST /auth/register

**Purpose:** Supports the core Student Marketplace API workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### POST /auth/login

**Purpose:** Supports the core Student Marketplace API workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### GET /listings

**Purpose:** Supports the core Student Marketplace API workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### POST /listings

**Purpose:** Supports the core Student Marketplace API workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### GET /listings/:id

**Purpose:** Supports the core Student Marketplace API workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### PATCH /listings/:id

**Purpose:** Supports the core Student Marketplace API workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### POST /listings/:id/offers

**Purpose:** Supports the core Student Marketplace API workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### POST /listings/:id/save

**Purpose:** Supports the core Student Marketplace API workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```


## Error Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Readable error message"
  }
}
```
