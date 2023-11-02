export const GA_TRACKING_ID = 'G-W6R23ZYZ2R';

export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams,
) => {
  window.gtag('event', action, { event_category, event_label, value });
};
