const LISTING_STATUSES = ["draft", "active", "reserved", "sold", "removed"];
const OFFER_STATUSES = ["pending", "accepted", "declined", "withdrawn"];

function normalizePrice(priceCents) {
  const price = Number(priceCents);
  if (!Number.isInteger(price) || price < 0) {
    throw new Error("priceCents must be a positive integer");
  }
  return price;
}

function canEditListing(user, listing) {
  return user.role === "admin" || user.id === listing.sellerId;
}

function canMakeOffer(user, listing) {
  return listing.status === "active" && user.id !== listing.sellerId;
}

function transitionListingStatus(currentStatus, nextStatus) {
  const allowed = {
    draft: ["active", "removed"],
    active: ["reserved", "sold", "removed"],
    reserved: ["active", "sold", "removed"],
    sold: [],
    removed: []
  };

  if (!LISTING_STATUSES.includes(nextStatus)) {
    throw new Error("Unknown listing status");
  }

  if (!allowed[currentStatus]?.includes(nextStatus)) {
    throw new Error(`Cannot move listing from ${currentStatus} to ${nextStatus}`);
  }

  return nextStatus;
}

module.exports = {
  LISTING_STATUSES,
  OFFER_STATUSES,
  normalizePrice,
  canEditListing,
  canMakeOffer,
  transitionListingStatus
};
