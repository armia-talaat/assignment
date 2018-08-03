import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Spinner from '../../components/spinner/Spinner';
import '../../shared/Utils.scss';

const mapStateToProps = state => ({
  userLoaded: state.user.loaded
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: !props.userLoaded
    };
  }
  componentDidMount() {}
  render() {
    if (this.state.isLoading || this.props.userLoaded) {
      return (
        <div className="center center--horizontal center--vertical full-view">
          <Spinner color="#a9f3d3" />
        </div>
      );
    }
    return <div />;
  }
}
MenuContainer.propTypes = {
  userLoaded: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
