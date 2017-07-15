import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Grid, Row, Col} from 'react-bootstrap';

// import {loadExample} from '../../actions';

// import './style.css';

class DataManager extends Component {
  constructor(props) {
    super(props);
    this.config = this.props.config;
    this.data = this.props.data;
  }

  componentDidMount() {
  }

  render() {
    return (
      <div />
    );
  }
}

const mapStateToProps = (state) => ({
  config: state.config,
  data: state.data
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(DataManager);
