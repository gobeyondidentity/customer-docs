import React from 'react';
import clsx from 'clsx';
import '../../global';
import { RedocStandalone } from 'redoc';
import { useSpecOptions } from '../../utils/useSpecOptions';
import './styles.css';
import ServerRedoc from './ServerRedoc';
function Redoc(props) {
    const { className, optionsOverrides, spec, url, themeId, isSpecFile } = props;
    const { options } = useSpecOptions(themeId, optionsOverrides);
    const isDevMode = process.env.NODE_ENV === 'development';
    if ((isDevMode && isSpecFile === false) || !spec) {
        return (<div className={clsx(['redocusaurus', className])}>
        <RedocStandalone specUrl={url} options={options}/>
      </div>);
    }
    return <ServerRedoc {...props} spec={spec}/>;
}
export default Redoc;
