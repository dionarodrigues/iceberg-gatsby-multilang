import React from "react"
import propTypes from "prop-types"
import LocalizedLink from "../components/localizedLink"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {

  return(
    <ul className="pagination">
      <li>
      {!isFirst && <LocalizedLink to={prevPage}>
          ← Prev
        </LocalizedLink> }
      </li>
      {currentPage} de {numPages}
      <li>
        {!isLast && <LocalizedLink to={nextPage}>
          Next →
        </LocalizedLink> }
      </li>
    </ul>
  )
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination