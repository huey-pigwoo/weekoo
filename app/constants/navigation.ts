import { Navigation } from '@toolpad/core/AppProvider';

export const NAVIGATION: Navigation = [
    { kind: 'header', title: '基礎學習' },
    {
        segment: 'hiragana',
        title: '平假名'
    },
    { kind: 'divider' },
    { kind: 'header', title: '課程學習' },
    {
        segment: 'vocabulary',
        title: '單詞',
        children: [
            { segment: 'unit1', title: '第一單元' },
            { segment: 'unit2', title: '第二單元' },
            { segment: 'unit3', title: '第三單元' }
        ]
    },
    {
        segment: 'grammar',
        title: '語法',
        children: [
            { segment: 'unit1', title: '第一單元' },
            { segment: 'unit2', title: '第二單元' },
            { segment: 'unit3', title: '第三單元' }
        ]
    }
]; 