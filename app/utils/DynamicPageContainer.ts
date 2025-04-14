'use client';

import React, { Suspense } from 'react';

// 动态加载组件
const HiraganaPage = React.lazy(() => import('./hiragana/page'));
const VocabularyPage = React.lazy(() => import('./vocabulary/page'));
const NotFoundPage = React.lazy(() => import('./404'));

interface DynamicPageContainerProps {
  router: {
    pathname: string;
  };
}

export default function DynamicPageContainer({ router }: DynamicPageContainerProps) {
  const { pathname } = router;

  let PageComponent;
  switch (pathname) {
    case '/hiragana':
      PageComponent = HiraganaPage;
      break;
    case '/vocabulary':
      PageComponent = VocabularyPage;
      break;
    default:
      PageComponent = NotFoundPage;
      break;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageComponent />
    </Suspense>
  );
}