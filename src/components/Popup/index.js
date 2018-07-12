import React from 'react';
import { Popup } from 'semantic-ui-react';
import styles from './styles';

const CustomPopup = ({triggerContent, popupContent}) => {
    return (
        <Popup 
            trigger={triggerContent}
            content={popupContent}
            on='click'
            position='bottom left'
            style={styles.popup}
            inverted
        />
    );
};

export default CustomPopup;