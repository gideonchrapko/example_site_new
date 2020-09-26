import React from 'react'
import Lottie from 'react-lottie'
import animationData from './lottie/loading.json'

class Loading extends React.Component {


    render(){
  
      const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  
      return(
        <div>
          <Lottie 
                style={{position: "relative", marginTop: "-200px", marginLeft: "-200px"}}
                options={defaultOptions}
                height={400}
                width={400}
          />
        </div>
      )
    }
  }
  
  export default Loading