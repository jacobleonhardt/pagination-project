import React from 'react'
import { usePagination, DOTS } from '../hooks/usePaginate'

export const Pagination = ({ totalCountOfItemsInData, pageSize, siblingCount, currentPage, onPageChange }) => {
  const paginationRange = usePagination({totalCountOfItemsInData, pageSize, siblingCount, currentPage})

  if(paginationRange.length < 2) return null

  const nextClick = () => onPageChange(currentPage + 1)
  const prevClick = () => onPageChange(currentPage - 1)

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <ul className="pagination justify-content-center">
      <li className="page-item" disabled={currentPage === 1} onClick={() => prevClick(currentPage)}>
        <ion-icon name="arrow-dropleft"></ion-icon>
      </li>
      {paginationRange.map( page => {
        if (page === DOTS) return <li>{DOTS}</li>

        return <li className="page-item" selected={page === currentPage} onClick={() => onPageChange(page)}>
                <span className="page-link">{page}</span>
              </li>
      })}
      <li className="page-item" disabled={currentPage === lastPage} onClick={() => nextClick(currentPage)}>
        <ion-icon name="arrow-dropright"></ion-icon>
      </li>
    </ul>
  )
}
