import React from 'react';

class CircleLayout extends React.Component {
  render() {
    return (
      <div className="circle-layout">
        <div className="center-circle">
          {/* Text content for the center circle */}
          <span className="circle-text">Center</span>
        </div>
        <div className="arrow-container">
          <div className="arrow">
            <div className="arrow-circle">
              {/* Text content for the circle connected to the first arrow */}
              <span className="circle-text">Arrow 1</span>
            </div>
          </div>
          <div className="arrow">
            <div className="arrow-circle">
              {/* Text content for the circle connected to the second arrow */}
              <span className="circle-text">Arrow 2</span>
            </div>
          </div>
          <div className="arrow">
            <div className="arrow-circle">
              {/* Text content for the circle connected to the third arrow */}
              <span className="circle-text">Arrow 3</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CircleLayout;
