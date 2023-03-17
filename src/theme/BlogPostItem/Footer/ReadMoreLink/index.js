import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '@mui/material';

function ReadMoreLabel() {
  return (
    <b>
      <Translate
        id="theme.blog.post.readMore"
        description="The label used in release notes item excerpts to link to full release notes posts">
        Continue reading ...
      </Translate>
    </b>
    
  );
}
export default function BlogPostItemFooterReadMoreLink(props) {
  const {blogPostTitle, ...linkProps} = props;
  return (
    <Link
      aria-label={translate(
        {
          message: 'Read more about {title}',
          id: 'theme.blog.post.readMoreLabel',
          description:
            'The ARIA label for the link to full release notes from excerpts',
        },
        {title: blogPostTitle},
      )}
      {...linkProps}>
      <ReadMoreLabel />
    </Link>
  );
}
