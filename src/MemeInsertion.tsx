import { observer } from 'mobx-react';
import React from 'react';
import { WithMemeTag } from './models/MemeTemplate';

export default observer(
    class MemeInsertion extends React.Component<WithMemeTag> {
        private getStyle() {
            return Object.fromEntries(this.props.tag.css.filter(({is_active}) => is_active).map(({prop, value}) => [prop, value]))
        }

        render() {
            return <p className="memeInsertion" style={ this.getStyle() }>{this.props.tag.text}</p>
        }
    }
)