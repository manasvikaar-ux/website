type CalendlyApi = {
  initPopupWidget: (options: { url: string }) => void;
};

const isCalendlyApi = (value: unknown): value is CalendlyApi => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const initPopupWidget = Reflect.get(value, 'initPopupWidget');

  return typeof initPopupWidget === 'function';
};

export const openCalendlyPopup = (url: string) => {
  const calendly = Reflect.get(window, 'Calendly');

  if (!isCalendlyApi(calendly)) {
    return;
  }

  calendly.initPopupWidget({ url });
};
