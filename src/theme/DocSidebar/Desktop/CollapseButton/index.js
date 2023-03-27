import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import IconArrow from '@theme/Icon/Arrow';
import styles from './styles.module.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function CollapseButton({onClick}) {
  return (
    <button
      type="button"
      title={translate({
        id: 'theme.docs.sidebar.collapseButtonTitle',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      aria-label={translate({
        id: 'theme.docs.sidebar.collapseButtonAriaLabel',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      className={clsx(
        'button button--secondary button--outline',
        styles.collapseSidebarButton,
      )}
      onClick={onClick}>
      <NavigateNextIcon className={styles.collapseSidebarButtonIcon} />
    </button>
  );
}