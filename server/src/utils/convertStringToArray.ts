export default function convertStringToArray (value) {
  const array = value.split(',').map(item => item.trim())

  return array
}
