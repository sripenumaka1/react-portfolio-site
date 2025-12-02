import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {index < items.length - 1 ? (
              <>
                <Link to={item.path} className={styles.link}>
                  {item.label}
                </Link>
                <span className={styles.separator} aria-hidden="true">
                  /
                </span>
              </>
            ) : (
              <span className={styles.current} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

