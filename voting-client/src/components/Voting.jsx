import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {connect} from 'react-redux';
import Vote from './Vote.jsx';
import Winner from './Winner.jsx';
import * as actionCreators from '../action_creators';

//TODO: think about this, it looks like a router. Why not use a router?
export class Voting extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
    return (
      <div>
        {this.props.winner ?
          <Winner winner={this.props.winner} /> :
          <Vote {...this.props} />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  }
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);
