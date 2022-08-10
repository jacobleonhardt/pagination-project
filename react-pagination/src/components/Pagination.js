import React from 'react'
import { usePagination, DOTS } from '../hooks/usePaginate'

export const Pagination = ({ totalCountOfItemsInData, pageSize, siblingCount, currentPage, onPageChange }) => {
  const paginationRange = usePagination({totalCountOfItemsInData, pageSize, siblingCount, currentPage})

  if(currentPage === 0 || paginationRange.length < 2) return null

  const nextClick = () => onPageChange(currentPage + 1)
  const prevClick = () => onPageChange(currentPage - 1)

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <ul>
      <li disabled={currentPage === 1} onClick={() => prevClick(currentPage)}></li>
      {paginationRange.map( page => {
        if (page === DOTS) return <li>{DOTS}</li>

        return <li selected={page === currentPage} onClick={() => onPageChange(page)}>{page}</li>
      })}
      <li disabled={currentPage === lastPage} onClick={() => nextClick(currentPage)}></li>
    </ul>
  )
}
