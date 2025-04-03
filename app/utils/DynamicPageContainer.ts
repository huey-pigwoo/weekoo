'use client';

import React, { Suspense } from 'react';

// 动态加载组件
const HiraganaPage = React.lazy(() => import('./hiragana/page'));
const VocabularyPage = React.lazy(() => import('./vocabulary/page'));
const NotFoundPage = React.lazy(() => import('./404'));

export default function DynamicPageContainer({ router }: { router: any }) {
  const { pathname } = router;

  // 根据路由动态选择组件
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
      {/* 渲染动态加载的组件 */}
      <PageComponent />
    </Suspense>
  );
}