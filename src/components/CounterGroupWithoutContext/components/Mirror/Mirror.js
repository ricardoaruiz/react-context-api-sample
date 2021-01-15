import PropTypes from 'prop-types';

const Mirror = ({counter}) => {
  return (
    <div>
      Contador espelho: {counter}
    </div>
  )
}

Mirror.propTypes = {
  counter: PropTypes.number.isRequired
}

export default Mirror;