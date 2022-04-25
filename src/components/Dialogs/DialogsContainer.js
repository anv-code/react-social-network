import {compose} from 'redux';
import {connect} from 'react-redux';
import {actionSendMessage} from '../../redux/dialogs-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(actionSendMessage(newMessageBody));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
