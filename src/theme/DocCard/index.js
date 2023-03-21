import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  findFirstCategoryLink,
  useDocById,
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
function CardContainer({ href, children, className }) {
  return (
    <Link
      href={href}
      className={clsx("card padding--lg", styles.cardContainer, className)}
    >
      {children}
    </Link>
  )
}
function CardLayout({ href, icon, title, description, className }) {
  return (
    <CardContainer href={href} className={className}>
      {className?.includes("api-method") ? null : (
        <div className={styles.cardIcon}></div>
      )}
      <div>
        <h3 className={styles.cardTitle} title={title}>
          {title}
        </h3>
        {description && (
          <p
            className={clsx("text--truncate", styles.cardDescription)}
            title={description}
          >
            {description}
          </p>
        )}
      </div>
    </CardContainer>
  )
}
function CardCategory({item}) {

  const href = findFirstCategoryLink(item);
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      description={translate(
        {
          message: '{count} items',
          id: 'theme.docs.DocCard.categoryDescription',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        {count: item.items.length},
      )}
      className={item.className}
    />
  );
}
function CardLink({ item }) {
  const icon = isInternalUrl(item.href) ? "📄️" : "🔗"
  const doc = useDocById(item.docId ?? undefined)
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={doc?.description}
      className={item.className}
    />
  )
}
export default function DocCard({item}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
