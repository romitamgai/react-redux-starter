import * as React from 'react';
import proptypes from 'react-proptypes';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  location: proptypes.any,
  children: proptypes.element
};

export default withRouter(ScrollToTop);
