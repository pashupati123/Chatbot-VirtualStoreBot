import React, { Component } from 'react'
import logo from '../static-contents/milk.jpeg'

export class Searchitem extends Component {
    render() {
        return (
            <div>
                
                <span style={{ display: 'inline' }}>
              <img
                src={logo}
                alt="logofile"
                style={{
                  height: '30px',
                  width: '30px',
                  display: 'inline',
                  marginLeft: '7px',
                }}
              />
              <span
                style={{
                  position: 'relative',
                  bottom: '12px',
                  fontSize: '20px',
                  fontFamily: 'HelveticaforTargetBold,Arial',
                }}
              >
                available in store
              </span>{' '}
            </span>
            </div>
        )
    }
}

export default Searchitem
