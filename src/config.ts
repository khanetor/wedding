// ────────────────────────────────────────────────────────────────────────────
//  Site configuration — Kha & Linh wedding website.
//  EN at "/", VI at "/vi". Both routes share the same nav labels per locale.
// ────────────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: "Kha & Linh",
  title: "Kha & Linh — Our Forever Begins",
  description:
    "Join us in celebrating the wedding of Kha & Linh. Find all the information you need about our special day.",
};

// Public base URL of the photo originals in the `my-wedding` bucket. Photos are
// uploaded as-is (no renditions), never committed. Paths under it are
// <dir>/<filename>, e.g. digital/photo-1.jpg.
export const PHOTO_BASE = "https://rustfs.khanetor.me/my-wedding/photos";

// Left-hand navigation (English). The VI nav is generated from this with the
// viNav map below.
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Our Story", href: "/story" },
  { label: "Gallery", href: "/gallery" },
  { label: "RSVP", href: "/rsvp" },
  { label: "Gifts", href: "/gifts" },
];

// Vietnamese nav labels + a vi-prefixed href. Kept in sync with `nav` above.
export const viNav: NavItem[] = [
  { label: "Trang chủ", href: "/vi" },
  { label: "Sự kiện", href: "/vi/events" },
  { label: "Câu chuyện", href: "/vi/story" },
  { label: "Album ảnh", href: "/vi/gallery" },
  { label: "Xác nhận tham dự", href: "/vi/rsvp" },
  { label: "Quà mừng", href: "/vi/gifts" },
];
