import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Star, StarFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import {
  addToFavouriteAction,
  removeFromFavouriteAction,
} from '../redux/actions'

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()

  const isFav = favourites.includes(data.company_name)

  const handleAddToFavourite = () => {
    dispatch(addToFavouriteAction(data.company_name))
  }

  const handleRemoveFromFavourite = () => {
    dispatch(removeFromFavouriteAction(data.company_name))
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3} className="d-flex align-items-center">
        {isFav ? (
          <StarFill
            color="gold"
            size={16}
            className="mr-2"
            onClick={handleRemoveFromFavourite}
          />
        ) : (
          <Star
            color="gold"
            size={16}
            className="mr-2"
            onClick={handleAddToFavourite}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
