import React from 'react'

export const ErrorMessage = ({error}) => {
  return (
    <div className="alert alert-danger" role="alert">{error}</div>
  )
}
