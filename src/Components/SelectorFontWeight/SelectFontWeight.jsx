import React from 'react';
import Classes from './Selectors.module.scss';
import Fonts from '../../Style/Fonts';
import ButtonFont from '../UI/Buttons/ButtonFont';

const SelectFontWeight = () => {
    const FontWeights = ['Black', 'Bold', 'Medium', 'Regular', 'Light']
    

    return (
        <div className={Classes.SelectWraper}>
            <div className={Classes.title} style={Fonts.Body1}>Select type</div>
            <div className={Classes.Selectors}>
                {FontWeights.map((FontWeight, index) =>
                    <ButtonFont key={index}>
                        {FontWeight}
                    </ButtonFont> 
                )}
            </div>
        </div>
    );
};
export default SelectFontWeight;