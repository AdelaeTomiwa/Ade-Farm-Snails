import React, { Component } from 'react';

export default class RefreshPage extends Component {
   componentDidMount() {
      window.location.reload(false);
   }
   render() {
      return <div></div>;
   }
}
