import React,{ useState, useEffect } from 'react';
import {MDXProvider} from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';

/* custom imports */
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';

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
        data-netlify="true"
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

        

       
      </form>
    );
  };
  return (
    <>
      <div className="markdown prose-sm mt-12 divider gray-200">
        {/* Forms column*/}
        <div className="flex flex-wrap">


          {/* Contribute column*/}
          <div className="flex-1 pl-2 pt-2">
            <br />
            <h4 className="!mt-0">See the <a href="https://www.beyondidentity.com/support">Beyond Identity Support site</a> for information on:</h4>
            <ul className="text-sm">
              <li><a href="https://support.beyondidentity.com/hc/en-us/requests/new">Submitting a request</a></li>
              <li><a href="https://support.beyondidentity.com/hc/en-us/community/topics/4410556274327-Feature-Requests">Viewing feature requests</a></li>
              <li><a href="https://support.beyondidentity.com/hc/en-us/sections/6746957130007-Troubleshooting">Viewing troubleshooting articles in our knowledgebase</a></li>
              <li><a href="https://support.beyondidentity.com/hc/en-us/community/topics/4410556272919-General-Discussion">Joining the discussion</a></li>
              <li><a href="https://app.byndid.com/downloads">Downloading the last Authenticator</a></li>
            </ul>
          </div>
        </div>
      </div>
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
      <hr />
      <FeedbackForm />
    </>
  );
}
