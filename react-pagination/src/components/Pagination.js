import React from 'react'
import { usePagination, DOTS } from '../hooks/usePaginate'

export const Pagination = ({ totalCountOfItemsInData, pageSize, siblingCount, currentPage, onPageChange }) => {
  const paginationRange = usePagination(totalCountOfItemsInData, pageSize, siblingCount, currentPage)
  if(currentPage === 0 || paginationRange.length < 2) return null

  const prevClick = () => onPageChange(currentPage - 1)
  const nextClick = () => onPageChange(currentPage + 1)

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <button disabled={currentPage == 1} onClick={() => prevClick(currentPage)}>
          <ion-icon name="arrow-dropleft"></ion-icon>
        </button>
      </li>
      {paginationRange.map( (page, i) => {
        if (page === DOTS) return <li key={i} className="page-item"><span className="page-link">{DOTS}</span></li>

        return <li key={i} className="page-item" selected={page === currentPage} onClick={() => onPageChange(page)}>
                <span className="page-link">{page}</span>
              </li>
      })}
      <li className="page-item">
        <button disabled={currentPage == lastPage} onClick={() => nextClick(currentPage)}>
          <ion-icon name="arrow-dropright"></ion-icon>
        </button>
      </li>
    </ul>
  )
}
