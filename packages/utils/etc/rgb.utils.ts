/**
 * 16진수 색상 코드를 RGB 문자열로 변환합니다.
 *
 * `#RGB`, `#RRGGBB`, `RGB`, `RRGGBB` 형식을 모두 지원하며,
 * RGB 값은 `"R,G,B"` 형식의 문자열로 반환됩니다.
 * 유효하지 않은 경우 `null`을 반환합니다.
 *
 * @param hex - 변환할 16진수 색상 코드 문자열
 * @returns `"R,G,B"` 형식의 문자열 또는 유효하지 않으면 `null`
 *
 * @example
 * hexToRgb('#03F')       // "0,51,255"
 * hexToRgb('#0033FF')    // "0,51,255"
 * hexToRgb('0033FF')     // "0,51,255"
 * hexToRgb('invalid')    // null
 */
export function hexToRgb(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

  hex = hex.replace(shorthandRegex, (m: string, r: string, g: string, b: string) => {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : null
}
