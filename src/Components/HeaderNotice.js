import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class HeaderNotice extends React.Component{
    render(){
        return(
            <div className="alert alert-info" id = "notice">
            <strong>Note!  </strong>
            ISLANDWIDE FREE DELIVERY ON ORDERS ABOVE RS.3000/=.
          </div>
        )
    }
}



