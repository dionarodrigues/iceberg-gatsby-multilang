import React from "react"
import { graphql } from "gatsby"
import LocalizedLink from "../components/localizedLink"
import useTranslations from "../components/useTranslations"

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

export default Pagination