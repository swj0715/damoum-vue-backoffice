import { IYearMonth } from '@/shared/types/api/yearMonth.type'

export function lPad(str: string, len: number) {
  str = str + ''
  while (str.length < len) {
    str = '0' + str
  }
  return str
}

export function dateToString(inDate: string | Date | number) {
  const date = new Date(inDate)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}

export function formatDateTime(dateParam?: Date | string | number): string | undefined {
  if (dateParam) {
    const dateInstance = new Date(dateParam)
    const year = dateInstance.getFullYear()
    const month = padZero(dateInstance.getMonth() + 1)
    const date = padZero(dateInstance.getDate())
    const hours = padZero(dateInstance.getHours())
    const minutes = padZero(dateInstance.getMinutes())
    const second = padZero(dateInstance.getSeconds())

    return `${year}-${month}-${date} ${hours}:${minutes}:${second}`
  }
}

export function formatYearMonth(yearMonth: IYearMonth) {
  return `${yearMonth.year}-${String(yearMonth.month).padStart(2, '0')}`
}


export function formatDateString(dateParam: Date | undefined): string {
  if (dateParam === undefined) {
    return ''
  }
  const year = dateParam.getFullYear()
  const month = padZero(dateParam.getMonth() + 1)
  const date = padZero(dateParam.getDate())
  return `${year}-${month}-${date}`
}

export function padZero(param: number): string {
  return param.toString().padStart(2, '0')
}

export function easterEgg() {
  console.log('{\\___/}       Danal\n( ▫ ◻ ▫)     Team Damoum\n/  >          App Backoffice')
}

export function convertPhoneNoFormat(phoneNoStr: string | undefined) {
  if (phoneNoStr && phoneNoStr.length == 11) {
    const first = phoneNoStr.substring(0, 3)
    const second = phoneNoStr.substring(3, 7)
    const third = phoneNoStr.substring(7, 11)
    return first.concat('-').concat(second).concat('-').concat(third)
  } else {
    return ''
  }
}

export function convertBirthGFormat(birthg: string | undefined) {
  if (birthg) {
    return birthg.slice(0, 6) + '-' + birthg.slice(6)
  }
}

export function formAgreeOrNot(agree: string | undefined) {
  if (agree == undefined) return

  return agree ? '동의' : '미동의'
}

export function getMaskedEmail(email: string | undefined) {
  if (email == undefined) return
  if (email.split('@')[0].length < 2) return
  const len = email.split('@')[0].length - 2
  const mask = '*'.repeat(len)
  return email.slice(0, 2) + mask + email.slice(mask.length + 2, email.length)
}

export function getLastFour(param: string): string {
  return param.slice(-4)
}

export function avatarText(value: string) {
  if (!value) return ''
  const nameArray = value.split(' ')

  return nameArray.map((word) => word.charAt(0).toUpperCase()).join('')
}

/**
 * HTML 문자열에서 순수 텍스트만 추출하여 반환합니다.
 *
 * Rich Text Editor 등 결과 값이 HTML String 인 경우 내용만 뽑아보고 싶을 때 사용합니다.
 *
 * @param html 텍스트를 추출할 HTML 문자열
 * @returns 공백이 제거된 순수 텍스트 문자열
 *
 * @example
 * const html = "<p>Hello <strong>world</strong>!</p>";
 * const text = extractPlainTextFromHTML(html);
 * console.log(text); // "Hello world!"
 */
export function extractPlainTextFromHTML(html: string): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  return doc.body.textContent?.trim() ?? ''
}
