import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import LastUpdated from '@theme/LastUpdated';
import EditThisPage from '@theme/EditThisPage';
import TagsListInline from '@theme/TagsListInline';
import styles from './styles.module.css';

function EditMetaRow({
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, 'row')}>

      <div className={clsx('col', styles.lastUpdated)}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
}
export default function LastUpdatedDateHeader() {
  const {metadata} = useDoc();
  const {lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy} =
    metadata;
  const canDisplayEditMetaRow = !!( lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return (
    <div
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-md')}>

      {canDisplayEditMetaRow && (
        <EditMetaRow
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
        />
      )}
    </div>
  );
}
