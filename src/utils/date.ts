export function getMonthAndYearFromDate(dateString: string) {
  const date = new Date(dateString)
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${month >= 10 ? month : `0${month}`}/${year}`
}
