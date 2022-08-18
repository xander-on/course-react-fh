
import PropTypes from "prop-types"


export const FirstApp = ({title, subTitle, name}) =>
  <>
    <div data-testid="test-title"> {title} </div>
    <p>{subTitle}</p>
    <p>{subTitle}</p>
    <p>{name}</p>
  </>

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  // title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name:'Alexander Moreno'
}



