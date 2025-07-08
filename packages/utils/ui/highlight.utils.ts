export function checkHighlight(param: string) {
  const regex = /\{[^}]*\}/g
  const regex2 = /\{[^}]*/g
  const filterString = param.replace(regex, (match) => {
    return `<span class='highlight'>${match.substring(1, match.length - 1)}</span>`
  })
  return filterString.replace(regex2, (match) => {
    return `<span class='highlight'>${match.substring(1, match.length - 1)}</span>`
  })
}

export function handleMaxLength(param: string, length: number): string {
  if (param.length >= length) return param.substring(0, 20).concat('...')
  else return param
}
