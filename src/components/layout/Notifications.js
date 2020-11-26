import React, { Component } from 'react';

class Notifications extends Component {
   notificationStyle = () => {
      const { top } = this.props;
      return {
         background: '#ff220c',
         color: '#ffffff',
         padding: '1rem',
         width: '50%',
         textAlign: 'center',
         position: 'fixed',
         opacity: '0.9',
         top: top,
         right: '3%',
         zIndex: '10',
         transition: 'all 0.5s ease-out',
      };
   };

   render() {
      const { notificationContent } = this.props;
      return <div style={this.notificationStyle()}>{notificationContent}</div>;
   }
}
export default Notifications;
