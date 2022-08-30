export function formatDocumentNumber(documentNumber: number) {
  const documentNumberToString = String(documentNumber)
  let documentNumberFormatted = ''
  if (documentNumberToString.length === 11) {
    documentNumberFormatted = documentNumberToString.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4',
    )
  } else {
    documentNumberFormatted = documentNumberToString.replace(
      /(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/,
      '$1.$2.$3/$4.$5',
    )
  }
  return documentNumberFormatted
}

export function convertDateToFormatPtBr(date: string) {
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(
    new Date(date),
  )
}

export function convertStringToCurrencyPtBr(value: string) {
  const convertStringToNumber = Number(value.replace(',', '.'))
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(convertStringToNumber)
}
