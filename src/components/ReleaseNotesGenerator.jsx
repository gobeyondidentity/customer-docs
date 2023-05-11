import React, { useEffect, useState } from 'react';
import Heading from '@docusaurus/theme-classic/lib/theme/Heading';
import ReactMarkdown from 'react-markdown';

const changeTypes = [
  {
    // these will need to be updated based on BI 
    name: 'features',  // What's new
    color: '#00e0a5',
    label: 'Features',
  },
  {
    name: 'fixes', // Resolved
    color: '#e0ac12',
    label: 'Fixed Issues',
  },
  {
    name: 'new_api',  // Updated
    color: '#1264a3',
    label: 'New API',
    className: 'newAPI',
  },
  {
    name: 'dep_api',  // Known issues or APIs
    color: '#e01d5a',
    label: 'Deprecated API',
    className: 'deprecated',
  },
];

export default function ReleaseNotesGenerator({ noteKey }) {
  const [releaseNotes, setReleaseNotes] = useState([]);

  useEffect(() => {
    fetch(`/release-notes/${noteKey}.json`)
      .then((response) => response.json())
      .then((result) => setReleaseNotes(result));
  }, [noteKey]);

  return (
    <div className="notesContainer">
      {releaseNotes.map((m) => {
        return (
          <>
            {m.version && (
              <Heading as="h2" id={m.version}>
                v{m.version}
              </Heading>
            )}
            <p className="text-sm">
              Released on{' '}
              <time>
                {new Date(m.createdAt * 1000).toLocaleDateString('en-US', {
                  day: 'numeric',
                  year: 'numeric',
                  month: 'long',
                })}
              </time>
            </p>
            <table className="releaseNotes">
              {changeTypes.map((c) => {
                return m[c.name]?.length > 0 ? (
                  <tr className={c.className ?? ''}>
                    <td
                      className="type"
                      style={{
                        borderColor: c.color,
                      }}
                    >
                      {c.label}
                    </td>
                    <td className="sublist">
                      {m[c.name]?.map((f) => (
                        <tr>
                          <td>
                              {f.split("\n").map((i,key) => {
                                return <ReactMarkdown className="changeline" key={key}>{i}</ReactMarkdown>;
                              })}
                          </td>
                        </tr>
                      ))}
                    </td>
                  </tr>
                ) : null;
              })}
            </table>
          </>
        );
      })}
    </div>
  );
}