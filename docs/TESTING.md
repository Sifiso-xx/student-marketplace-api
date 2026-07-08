# Testing

## What The Tests Prove

- Listing validation rejects empty titles, invalid prices, and unsupported statuses.
- Ownership checks prevent a user from editing another user's listing.
- Offer rules prevent sellers from offering on their own items.
- Marketplace helper functions can be tested without running the HTTP server.

## How To Run

```bash
npm test
```

## Why This Matters

The tests focus on business rules that would cause real user or data problems if they failed. This keeps the MVP small while still proving the backend logic is not only documented but executable.

## Next Test Improvements

- Add route integration tests with a disposable PostgreSQL database.
- Add authentication middleware tests once JWT implementation is wired into the API.
- Add API contract checks against the OpenAPI document.
