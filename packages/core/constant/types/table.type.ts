import { SortDirectionDataTable } from './sort.type'

/**
 * VDataTable 의 헤더 데이터에서 타입 에러가 발생해서 추가했습니다.
 * 헤더 쓰실 일 있으실 때 사용 해 주세요.
 * @author Woojin Son
 */
export interface IVDataTableHeader {
  key?: (string & {}) | 'data-table-group' | 'data-table-select' | 'data-table-expand'
  title?: string
  align?: 'end' | 'center' | 'start'
  width?: string | number
  sortable?: boolean
}

export interface ISortItem {
  key: string
  order: SortDirectionDataTable
}
