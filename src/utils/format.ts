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
