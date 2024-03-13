import PropTypes from 'prop-types';


export default function Clock({time}){
    const hours = time.getHours();
    console.log(hours);
    const isNight = hours >= 0 && hours <= 6;
    console.log(isNight);

    const nightStyle = {
      backgroundColor: 'black',
      color: 'white',
    };
  
    const dayStyle = {
      backgroundColor: 'white',
      color: 'black',
    };

    return(
      <h1 style={isNight ? nightStyle : dayStyle}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }

Clock.propTypes = {
    time: PropTypes.instanceOf(Date).isRequired,
};
