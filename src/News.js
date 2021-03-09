import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {

//   useEditSatusInStore = () =>{
//       var {dispatch} = this.props;
//       dispatch({type:'CHANGE_EDIT_STATUS'})
//   }

    render() {
        return (
            <div>
                <h2>Đây là component news</h2>
                <button onClick={()=>this.props.useEditSatusInStore()}>Click di</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useEditSatusInStore: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(News)