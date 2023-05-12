import React,{ useState, useEffect } from 'react';

import { Col, Space, Row, Rate } from "antd";

const style = {
  padding: "1rem 0 0 0",
};
const contribute = {
  margin: "1.7rem 0"
}
const customIcons = {
  1: <LikeOutlined style={{ fontSize: '24px', color: '#6aa84f' }} />,
  2: <DislikeOutlined style={{ fontSize: '24px', color: '#f44336' }} />,
};

import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import {MDXProvider} from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
import DocItemPaginator from '@theme/DocItem/Paginator';

/* custom imports */
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';


/* custom function
   BEGIN
*/
function FeedbackForm(){
	const location = useLocation();
  const [feedback, setFeedback] = useState(false);

	useEffect(() => {
		if (window.location.search.includes('feedback=true')) {
			setFeedback(true);
		}
	}, []);

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&');
	};
	const [formData, setFormData] = useState({
		thumb: null,
		feedback: '',
		url: location.pathname,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const { botfield, ...rest } = formData;

		if (botfield) {
			setFeedback(true);
			return;
		}

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'docs-feedback', ...rest }),
		})
			.then(() => setFeedback(true))
			.catch(() => setFeedback(true));
	};
  
  const feedbackForm = (feedback) => {
    return feedback ? (
      <p className="text-lg lg:text-l text-green-lighter">
        Thanks for contributing feedback about our docs!
      </p>
    ) : (
      <form
        name="docs-feedback"
        method="post"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="url"
          aria-label="current url"
          value={formData.url}
        />
        <input type="hidden" name="form-name" value="docs-feedback" />
        <input
          type="hidden"
          name="thumb"
          aria-label="How do you like it?"
          value={formData.thumb}
        />
          <Space direction="horizontal">
            <Rate defaultValue={0} character={({ index }) => customIcons[index + 1]} />
          </Space>       
      </form>
    );
  };
  return (
    <>
      <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32
      }}
    >
      <Col className="gutter-row" span={12}>
        <div style={style}>
        <h3>Was this page helpful?</h3>
        <Row style={{ marginLeft: '80px' }}>{feedbackForm(feedback)}</Row>  
            
        </div>
        <div style={contribute}>
        <h4>What to contribute?</h4>
            <ul className="text-sm">
              <li>
                Submit a{' '}
                <Link to="#">
                  content issue
                </Link>
              </li>
              <li>
                Suggest an{' '}
                <Link to="#">
                  idea for the documentation
                </Link>
              </li>
            </ul>
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={style}>
        <h4>See the <a href="https://www.beyondidentity.com/support">Beyond Identity Support site</a> for information on:</h4>
            <ul className="text-sm">
              <li><a href="https://support.beyondidentity.com/hc/en-us/requests/new">Submitting a request</a></li>
              <li><a href="https://support.beyondidentity.com/hc/en-us/community/topics/4410556274327-Feature-Requests">Viewing feature requests</a></li>
              <li><a href="https://support.beyondidentity.com/hc/en-us/sections/6746957130007-Troubleshooting">Viewing troubleshooting articles in our knowledgebase</a></li>
              <li><a href="https://support.beyondidentity.com/hc/en-us/community/topics/4410556272919-General-Discussion">Joining the discussion</a></li>
              <li><a href="https://app.byndid.com/downloads">Downloading the lastest Authenticator</a></li>
            </ul>
        </div>
      </Col>
    </Row>
    </>
  );
}

/* custom function
   END
*/

export default function MDXContent({children}) {
  return (
    <>
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      <DocItemPaginator />
      <hr />
      <FeedbackForm />
    </>
  );
}
