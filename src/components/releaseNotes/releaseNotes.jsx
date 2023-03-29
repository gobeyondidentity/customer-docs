import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Link from '@docusaurus/Link';
import styles from './releaseNotes.module.css';




export const ReleaseVersion = '2.76.0';

export const ReleaseDate = 'March 14, 2023';

export const ReleaseNotes = [
	'Improved RDP experience',

];

export const WhatsNew = [
	{
		title: <>[Enticing title for release]</>,
		href: 'https://blog.netdata.cloud/introducing-netdata-paid-subscriptions/',
		date: 'Mar 14, 2023',
        version: '2.76.0',
		type: 'Link',
		description: (
			<>
				Additional features and capabilities for users and businesses that need tighter and customizable integration ...
			</>
		),
	},
	{
		title: <>[Enticing title for release]</>,
		href: 'https://blog.netdata.cloud/introducing-netdata-paid-subscriptions/',
		date: 'Feb 28, 2023',
        version: '2.75.0',
		type: 'Link',
		description: (
			<>
				Additional features and capabilities for users and businesses that need tighter and customizable integration ...
			</>
		),
	},
];

export default function ReleaseNotesTimeline() {
  return (
    <section className={styles.topics}>
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.1,
        }, 
        marginLeft: -2,
      }}
    >

        <div>

						<h3>
							Latest release
							<span className="text-base text-gray-500 font-medium uppercase dark:text-gray-400">&nbsp;
								<code className="text-base">{ReleaseVersion}</code>
								<span className="text-base mx-2"> • </span>
								<time className="text-base text-gray-500 font-medium uppercase dark:text-gray-400">
									{ReleaseDate}
								</time>
							</span>
						</h3>

            <p>
							Read the{' '}
							<Link
                to='/release-notes-main'			
							>
								release notes
<<<<<<< HEAD
							</Link> to see what we updated or fixed.{' '}
							You can also {' '}
=======
							</Link>{' '}
							or{' '}
>>>>>>> parent of bbd8f72 (add more how-to topics)
							<Link to={`https://app.byndid.com/downloads`}>
								{' '}
								update to the latest version
							</Link>
							.
						</p>
						<p>&nbsp;</p>
					</div>

<<<<<<< HEAD
          <TimelineItem>
        
        <TimelineOppositeContent  className={styles.topics} color="textSecondary" sx={{fontFamily: 'Overpass'}}>
			<a href="/v2-77-0">
          2.77.0</a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{fontFamily: 'Overpass', }}><p sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
          >New attributes are available in the Beyond Identity Policy Engine, including location-based attributes, egress IP address matching, and impossible travel detection.  
            </p></TimelineContent>
      </TimelineItem>              
=======
                    
>>>>>>> parent of bbd8f72 (add more how-to topics)
      <TimelineItem>
        
        <TimelineOppositeContent color="textSecondary" sx={{fontFamily: 'Overpass'}}>
			<a href="/v2-76-0">
          2.76.0</a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{fontFamily: 'Overpass', }}><p sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}>
            Additional features and capabilities for users and businesses that need tighter and customizable integration ...
            </p></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary" sx={{fontFamily: 'Overpass'}}>
        <a href="/v2-75-0">
          2.75.0</a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{fontFamily: 'Overpass'}}>Additional features and capabilities for users and businesses that need tighter and customizable integration ...</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary" sx={{fontFamily: 'Overpass'}}>
          2.75.3
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent sx={{fontFamily: 'Overpass'}}>

        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </section>
  );
}