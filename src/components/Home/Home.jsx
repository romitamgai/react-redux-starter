import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'react-proptypes';

import Todo from './Todo';

import leapfrogLogo from '../../assets/images/logo-leapfrog.png';

const Home = props => (
  <div className="todo">
    {!props.isLoading ? (
      <div>
        <div className="logo-holder">
          <small className="text-white">Powered by</small>
          <img src={leapfrogLogo} alt="Leapfrog" />
        </div>
        <div className="todo-contents">
          <h2>Leapfrog Chautari Web</h2>
          <Todo />
        </div>
      </div>
    ) : (
      <div>Loading....</div>
    )}
  </div>
);

const mapStateToProps = state => ({
  isLoading: state.ui.todo.isLoading
});

Home.propTypes = {
  isLoading: propTypes.bool
};

export default connect(mapStateToProps)(Home);
