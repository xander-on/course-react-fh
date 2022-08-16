
import PropTypes from "prop-types"


export const FirstApp = ({
  title ='el titulo ', 
  subTitle = 9
}) =>
  <>
    <h1>{title}</h1>
    <p>{subTitle}</p>
  </>

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 8
}



