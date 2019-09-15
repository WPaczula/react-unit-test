import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Checkbox extends PureComponent {
    static propTypes = {
        checked: PropTypes.bool,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked,
        }
    }

    
    componentDidUpdate({ checked: prevChecked }) {
        const { checked } = this.props;
        
        if (checked !== prevChecked) {
            this.toggleChecked(checked);
        }
    }

    toggleChecked = checked => this.setState({ checked });

    onChange = e => {
        const { checked } = e.target;
        const { onChange } = this.props;

        onChange(checked);
        this.toggleChecked(checked);
    }

    render() {
        const { checked } = this.state;
        const { label } = this.props;

        return (
            <label>
                {label}
                <input type="checkbox" checked={checked} onChange={this.onChange}/>
            </label>
        )
    }
}
