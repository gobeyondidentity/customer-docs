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
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.1,
        },
      }}
    >

        <div>
            <h2>What's new</h2>
						<h4>
							Latest release
							<span className="flex items-center font-semibold">&nbsp;
								<code className="text-base">{ReleaseVersion}</code>
								<span className="text-base mx-2"> • </span>
								<time className="text-base text-gray-500 font-medium uppercase dark:text-gray-400">
									{ReleaseDate}
								</time>
							</span>
						</h4>
            <p>
							Read the{' '}
							<Link
                to='/release-notes-main'			
							>
								release notes
							</Link>{' '}
							or{' '}
							<Link to={`https://app.byndid.com/downloads`}>
								{' '}
								update now
							</Link>
							.
						</p>
						<p>&nbsp;</p>
					</div>

                    
      <TimelineItem>
        
        <TimelineOppositeContent color="textSecondary" sx={{fontFamily: 'Overpass'}}>
			<a href="/v2-76-0">
          2.76.0</a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{fontFamily: 'Overpass'}}>
			<ul>
				<li><span className="changelog-tag" data-tag="Improved">Improved</span>
				Additional features and capabilities for users and businesses.
				</li>
			</ul>
			</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary" sx={{fontFamily: 'Overpass'}}>
          2.75.0
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
        <TimelineContent sx={{fontFamily: 'Overpass'}}>Additional features and capabilities for users and businesses that need tighter and customizable integration ...</TimelineContent>
      </TimelineItem>
    </Timeline>
    
  );
}