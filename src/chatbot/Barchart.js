import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

class Barchart extends React.Component {
  state = {
    curTime : new Date().toLocaleString(),
    dataHorizontal: {
      labels: ['', 'time'],
      datasets: [
        {
          label: 'High Guest Traffic @store',
          fill:true,
          data: [0, 200],

          backgroundColor: [
            'white',
            '#cc0000',

          ],
          borderColor: [

            'white',
            'rgb(54, 162, 235)',

          ],
          borderWidth: 1
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <h3 className='mt-5'>Guest Traffic</h3>
        {this.state.curTime}
        <HorizontalBar
          data={this.state.dataHorizontal}
          options={{ responsive: true }}
        />
        <h6>Avoid gathering please book shopping slot to stay safe</h6>
      </MDBContainer>
    );
  }
}

export default Barchart;



