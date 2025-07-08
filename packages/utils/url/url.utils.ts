/**
 * 이미지 파일에 대한 URL 경로를 설정해주는 유틸 함수입니다.
 * @param param
 * @returns
 */
export function convertImagePath(param?: string) {
  if (param) {
    const currentProfile = import.meta.env.MODE
    const baseEndpoint = import.meta.env.VITE_IMAGE_PATH_URL
    const imageUrl = new URL(param)
    const imageName = imageUrl.pathname.split('/').pop()
    if (currentProfile == 'prod') {
      return `${baseEndpoint}/uploads/images/${imageName}`
    } else if (currentProfile == 'dev') {
      return `${baseEndpoint}/${imageName}`
    } else {
      return param
    }
  }
}

/**
 * 이미지 파일 명만 존재하는 경우 URL 경로를 설정 해 주는 유틸 함수입니다.
 * @param param
 * @returns
 */
export function setImagePath(param?: string) {
  if (param) {
    const baseEndpoint = import.meta.env.VITE_IMAGE_PATH_URL
    const currentProfile = import.meta.env.MODE
    const imageName = param
    if (currentProfile == 'prod') {
      return `${baseEndpoint}/uploads/images/${imageName}`
    } else {
      return `${baseEndpoint}/${imageName}`
    }
  }
}
