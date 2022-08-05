import { useMemo } from "react"

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

    

  }, [totalCount, pageSize, currentPage])

  return pageRange;
}
