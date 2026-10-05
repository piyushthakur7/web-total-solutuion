/**
 * Stock photography used for atmosphere on marketing pages. All files are
 * self-hosted in /public/images/stock and come from Unsplash under the
 * Unsplash License (free for commercial use, no attribution required).
 * `source` is kept so each photo can be traced back or replaced.
 *
 * They are used as tinted backdrops in page heroes (see HERO_IMAGES below).
 *
 * These are illustrative only — never present a stock photo as our office, our
 * team or a client. Real project imagery lives in /public/work.
 */
export const STOCK_IMAGES = {
  designDesk: {
    src: '/images/stock/design-desk.jpg',
    alt: 'Design work open on two monitors at a desk',
    source: 'https://unsplash.com/photos/h7v_38e3iGE',
  },
  wireframeSketch: {
    src: '/images/stock/wireframe-sketch.jpg',
    alt: 'Website wireframes being sketched on paper',
    source: 'https://unsplash.com/photos/io0ZLYbu31s',
  },
  codeLaptop: {
    src: '/images/stock/code-laptop.jpg',
    alt: 'Source code open in an editor on a laptop',
    source: 'https://unsplash.com/photos/f77Bh3inUpE',
  },
  websiteDesk: {
    src: '/images/stock/website-desk.jpg',
    alt: 'Websites open on a laptop and monitor at a desk',
    source: 'https://unsplash.com/photos/hGV2TfOh0ns',
  },
  wireframeLayouts: {
    src: '/images/stock/wireframe-layouts.jpg',
    alt: 'Hand-painted wireframe sketches of website layouts',
    source: 'https://unsplash.com/photos/tZc3vjPCk-Q',
  },
  onlinePayment: {
    src: '/images/stock/online-payment.jpg',
    alt: 'Paying online by card on a laptop',
    source: 'https://unsplash.com/photos/Q59HmzK38eQ',
  },
  lawBooks: {
    src: '/images/stock/law-books.jpg',
    alt: 'Leather-bound books on a library shelf',
    source: 'https://unsplash.com/photos/IHQHXj3jv6E',
  },
  meetingRoom: {
    src: '/images/stock/meeting-room.jpg',
    alt: 'Meeting room with chairs around a table',
    source: 'https://unsplash.com/photos/tjd5CfdDPRA',
  },
};

/** Which backdrop each kind of page uses in its hero. */
export const HERO_IMAGES = {
  work: STOCK_IMAGES.websiteDesk,
  services: STOCK_IMAGES.wireframeLayouts,
  studio: STOCK_IMAGES.designDesk,
  planning: STOCK_IMAGES.wireframeSketch,
  code: STOCK_IMAGES.codeLaptop,
  commerce: STOCK_IMAGES.onlinePayment,
  law: STOCK_IMAGES.lawBooks,
};
