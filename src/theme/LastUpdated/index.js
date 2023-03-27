import React from 'react';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
function LastUpdatedAtDate({lastUpdatedAt, formattedLastUpdatedAt}) {
  return (
    <Translate
      id="theme.lastUpdated.atDate"
      description="The words used to describe on which date a page has been last updated"
      values={{
        date: (
          <b>
            <time dateTime={new Date(lastUpdatedAt * 1000).toISOString()}>
              {formattedLastUpdatedAt}
            </time>
          </b>
        ),
      }}>
      {' {date}'}
    </Translate>
  );
}

export default function LastUpdated({
  lastUpdatedAt,
  formattedLastUpdatedAt,

}) {
  return (
    <span className={ThemeClassNames.common.lastUpdated}>
      <Translate
        id="theme.lastUpdated.lastUpdatedAtBy"
        description="The sentence used to display when a page has been last updated, and by who"
        values={{
          atDate:
            lastUpdatedAt && formattedLastUpdatedAt ? (
              <LastUpdatedAtDate
                lastUpdatedAt={lastUpdatedAt}
                formattedLastUpdatedAt={formattedLastUpdatedAt}
              />
            ) : (
              ''
            ),
          
        }}>
        {'Last update:{atDate}'}
      </Translate>
      {process.env.NODE_ENV === 'development' && (
        <div>
          {/* eslint-disable-next-line @docusaurus/no-untranslated-text */}
            
        </div>
      )}
    </span>
  );
}