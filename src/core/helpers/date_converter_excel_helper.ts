export const dateConverterExcelHelper = (excelDate: any) => {
  // Excel date is number of days since January 1st, 1900
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const epoch = Date.parse("1899-12-30");
  const offset = (excelDate - 1) * millisecondsPerDay; // Subtract 1 to adjust for Excel's base date
  return new Date(epoch + offset);
};
