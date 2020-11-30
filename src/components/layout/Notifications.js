import React, { Component } from 'react';

class Notifications extends Component {
   notificationStyle = () => {
      const { top, notificationType } = this.props;
      return {
         background: notificationType === 'success' ? '#647244' : ' #ff220c',
         color: '#ffffff',
         padding: '1rem',
         width: '100%',
         textAlign: 'center',
         position: 'fixed',
         opacity: '1',
         top: top,
         right: '0%',
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
