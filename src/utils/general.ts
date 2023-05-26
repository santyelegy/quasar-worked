export const convertToDate = (isoDate: string, locale: string) => {
  const date = new Date(isoDate);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return date.toLocaleDateString(locale, options);
};
