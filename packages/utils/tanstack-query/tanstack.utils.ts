import { ISortItem } from '../../core/constant/types/table.type'
import { SortDirectionDataTable } from '../../core/constant/types/sort.type'

/**
 * VDataTableServer 사용하실 때 ItemPerPage Update EventListener 에 콜백함수로 사용하세요.
 *
 * @author Woojin Son
 * @param itemsPerPageParam
 * @param setItemsPerPageCallback
 * @param refetch TanstackQuery refetch
 */
export function updateItemPerPage(
  itemsPerPageParam: number,
  setItemsPerPageCallback: (param: number) => void,
  refetch: () => Promise<unknown>
) {
  setItemsPerPageCallback(itemsPerPageParam)
  refetch()
}

/**
 * VDataTableServer 사용하실 때 PageNo Update EventListener 에 콜백함수로 사용하세요.
 *
 * @author Woojin Son
 * @param pageNoParam
 * @param setPageNoCallback
 * @param refetch
 */
export function updatePage(
  pageNoParam: number,
  setPageNoCallback: (param: number) => void,
  refetch: () => Promise<unknown>
) {
  setPageNoCallback(pageNoParam)
  refetch()
}

/**
 * VDataTableServer 사용하실 때 Sort-by Update EventListener 에 콜백함수로 사용하세요.
 *
 * @author Woojin Son
 * @param sortItem
 * @param setSortOption
 * @param refetch
 */
export function updateSortBy(
  sortItem: ISortItem[],
  setSortOption: (sortOption: string, direction: SortDirectionDataTable) => void,
  refetch: () => Promise<unknown>
) {
  if (sortItem.length) {
    const item = sortItem[0]
    const sortOption: string = item.key
    const direction: SortDirectionDataTable = item.order
    setSortOption(sortOption, direction)
    refetch()
  }
}
