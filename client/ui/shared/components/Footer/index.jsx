import React, { PropTypes, Component } from 'react'
import {Link} from 'react-router'

class Footer extends Component {

  render() {
    
    return (      
      <div className="footer">
        <div className="container">
          <div className="copyright ml-20">
          LN Studio © 2016
          </div>          
        </div>
      </div>      
    )
  }
}

export default Footer