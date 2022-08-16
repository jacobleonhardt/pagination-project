import { useMemo } from "react"

export const DOTS = '...'

const rangeOfItemsToDisplay = (startPoint, endPoint) => {
  const length = (endPoint - startPoint) + 1
  const rangeArray = Array.from({length}, (_, index) => index + startPoint)
  return rangeArray
}

export const usePagination = (totalCountOfItemsInData, pageSize, siblingCount, currentPage) => {
  const pageRange = useMemo(() => {
    const totalNumberOfPages = Math.ceil(totalCountOfItemsInData / pageSize)
    const numberOfPagesToDisplay = (siblingCount + 5)

    if (totalNumberOfPages < numberOfPagesToDisplay) {
      return rangeOfItemsToDisplay(1, totalNumberOfPages)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalNumberOfPages)

    const showLeftDots = leftSiblingIndex > 2
    const showRightDots = rightSiblingIndex <= (totalNumberOfPages - 2)
    const firstPageIndex = 1
    const lastPageIndex = totalNumberOfPages

    if (!showLeftDots && showRightDots) {
      const itemCount = 2 + siblingCount
      const leftRange = rangeOfItemsToDisplay(1, itemCount)
      return [...leftRange, DOTS, totalNumberOfPages]
    }

    if (showLeftDots && showRightDots) {
      const middleRange = rangeOfItemsToDisplay(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }

    if (showLeftDots && !showRightDots) {
      const itemCount = 2 + siblingCount
      const rightRange = rangeOfItemsToDisplay((lastPageIndex - itemCount) + 1, lastPageIndex)

      return [firstPageIndex, DOTS, ...rightRange]
    }

  }, [totalCountOfItemsInData, pageSize, siblingCount, currentPage])

  return pageRange;
}
