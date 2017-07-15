import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import {loadExample} from '../../actions';
import DataManager from '../DataManager'

class App extends Component {
  constructor(props) {
    super(props);
    this.config = this.props.config;
    this.data = this.props.data;
    this.doInitLoad = this.props.doInitLoad;
  }

  componentDidMount() {
    if (this.config.initLoad) {
      this.doInitLoad();
    };
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col>
            <DataManager />
          </Col> 
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  config: state.config,
  data: state.data
});

const mapDispatchToProps = {
  doInitLoad: loadExample
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
