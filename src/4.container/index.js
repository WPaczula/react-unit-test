import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { withTranslate } from './translate';
import messages from './messages';

const SureToGoThere = ({ translate, history }) => {
    return (
        <div>
            <h1>{translate(messages.areYouSure)}</h1>
            <button onClick={() => history.push('/wild')}>{translate(messages.yes)}</button>
            <button>{translate(messages.no)}</button>
        </div>
    )
}

SureToGoThere.propTypes = {
    translate: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
}

export default withRouter(withTranslate(SureToGoThere));
