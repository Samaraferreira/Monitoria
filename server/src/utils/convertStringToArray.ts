export default function convertStringToArray (value: string) {
  if (!value) { return [] }
  if (!value.includes(',')) return [value]

  const array = value.split(',').map(item => item.trim())

  return array
}
