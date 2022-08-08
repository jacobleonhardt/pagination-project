import React from 'react'
import { usePagination, DOTS } from '../hooks/usePaginate'

export const Pagination = ({ totalCountOfItemsInData, pageSize, siblingCount, currentPage }) => {
  if(currentPage === 0 || paginationRange.length < 2) return null

  const paginationRange = usePagination({totalCountOfItemsInData, pageSize, siblingCount, currentPage})

  const nextClick = () => onPageChange(currentPage + 1)
  const prevClick = () => onPageChange(currentPage - 1)


  return (
    <>

    </>
  )
}
