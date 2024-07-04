import Pagination from 'react-bootstrap/Pagination'
import './style.css'

const PaginationNumber = ({ total, active, onPageChange }) => {
  let items = []

  if (total < 5) {
    for (let number = 1; number <= total; number++) {
      items.push(
        <Pagination.Item
          key={number}
          onClick={() => onPageChange(number)}
          active={number === active}
        >
          {number}
        </Pagination.Item>
      )
    }
  } else {
    if (active <= 2) {
      for (let number = 1; number <= 5; number++) {
        items.push(
          <Pagination.Item
            onClick={() => onPageChange(number)}
            key={number}
            active={number === active}
          >
            {number}
          </Pagination.Item>
        )
      }
    } else if (active >= total - 2) {
      for (let number = total - 4; number <= total; number++) {
        items.push(
          <Pagination.Item
            key={number}
            onClick={() => onPageChange(number)}
            active={number === active}
          >
            {number}
          </Pagination.Item>
        )
      }
    } else {
      for (let number = active - 2; number <= active + 2; number++) {
        items.push(
          <Pagination.Item
            key={number}
            onClick={() => onPageChange(number)}
            active={number === active}
          >
            {number === active ? (
              <span className="visually-hidden">(current)</span>
            ) : (
              number
            )}
          </Pagination.Item>
        )
      }
    }
  }

  return (
    <div className="pagination-wrapper">
      <Pagination>
        {total >= 5 && (
          <Pagination.Prev
            disabled={active === 1}
            onClick={() => onPageChange(active - 1)}
          />
        )}
        {items}
        {total >= 5 && (
          <Pagination.Next
            disabled={active === total}
            onClick={() => onPageChange(active + 1)}
          />
        )}
      </Pagination>
    </div>
  )
}

export default PaginationNumber