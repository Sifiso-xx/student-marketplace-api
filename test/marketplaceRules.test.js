const test = require("node:test");
const assert = require("node:assert/strict");
const {
  normalizePrice,
  canEditListing,
  canMakeOffer,
  transitionListingStatus
} = require("../src/marketplaceRules");

test("normalizes valid prices and rejects invalid prices", () => {
  assert.equal(normalizePrice("25000"), 25000);
  assert.throws(() => normalizePrice("-10"), /positive integer/);
});

test("allows seller or admin to edit a listing", () => {
  const listing = { sellerId: "user-1" };
  assert.equal(canEditListing({ id: "user-1", role: "student" }, listing), true);
  assert.equal(canEditListing({ id: "user-2", role: "student" }, listing), false);
  assert.equal(canEditListing({ id: "admin-1", role: "admin" }, listing), true);
});

test("prevents users from making offers on their own listings", () => {
  const listing = { sellerId: "user-1", status: "active" };
  assert.equal(canMakeOffer({ id: "user-2" }, listing), true);
  assert.equal(canMakeOffer({ id: "user-1" }, listing), false);
});

test("validates listing status transitions", () => {
  assert.equal(transitionListingStatus("active", "reserved"), "reserved");
  assert.throws(() => transitionListingStatus("sold", "active"), /Cannot move/);
});
