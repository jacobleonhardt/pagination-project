import { useMemo } from "react"

const DOTS = '...'

const rangeOfItemsToDisplay = (startPoint, endPoint) => {
  const lengthOfArray = (endPoint - startPoint)
  const rangeArray = Array.from({lengthOfArray}, (_, index) => index + startPoint)
  return rangeArray
}

export const usePagination = ({totalCountOfItemsInData, pageSize, siblingCount, currentPage}) => {
  const pageRange = useMemo(() => {
    const totalNumberOfPages = Math.ceil(totalCountOfItemsInData / pageSize)
    // first page, current page, last page, and dots on either side of current page = 5
    const numberOfPagesToDisplay = siblingCount + 5

    // If the totalNumberOfPages we have is < our numberOfPagesToDisplay, we just want to return a
    // range/array that is the first page -> however many pages we have.
    if(totalNumberOfPages < numberOfPagesToDisplay) return rangeOfItemsToDisplay(1, totalNumberOfPages)

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalCountOfItemsInData)

    const showLeftDots = leftSiblingIndex > 2
    const showRightDots = rightSiblingIndex < (totalCountOfItemsInData - 2)
    const firstPageIndex = 1
    const lastPageIndex = totalCountOfItemsInData
    const itemCount = 3 + (2 * siblingCount)

    if (!showLeftDots && showRightDots) {
      const leftRange = pageRange(1, itemCount)

      return [...leftRange, DOTS, totalNumberOfPages]
    }

    if (showLeftDots && showRightDots) {
      const middleRange = pageRange(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }

    if (showLeftDots && !showRightDots) {
      const rightRange = pageRange(lastPageIndex - itemCount, lastPageIndex)
      return [firstPageIndex, DOTS, ...rightRange]
    }

  }, [totalCount, pageSize, currentPage])

  return pageRange;
}
