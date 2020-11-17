import React, {Component} from 'react';


const HOC = ( Components, data) => {
    return class extends Component{
        render(){
            return(
                <div data-testid="hoc">
                    <div style={{ paddingLeft: '43%', paddingTop: '1%'}} data-testid="hocDiv">
                        <h3 >List of Amharic Genre</h3>
                    </div>
                    <Components />
                </div>
            )
        }
    }
}

export default HOC;