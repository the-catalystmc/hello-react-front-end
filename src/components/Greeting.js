import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../messages';

const Greeting = () => {
  const data = useSelector((state) => state.messagesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <div>
      {data.message}
    </div>
  );
};

// const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';

// function getMessages() {
//   return {
//     type: GET_THINGS_REQUEST
//   };
// };
// class Greeting extends React.Component {
//   render () {
//     return (
//       <React.Fragment>
//         Greeting: {this.props.greeting}
//       </React.Fragment>
//     );
//   }
// }

export default Greeting;
