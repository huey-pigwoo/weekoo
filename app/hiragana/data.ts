const FullHiraganaData = [
    { row: '', chars: [{ char: 'あ(ア)', romaji: 'a' }, { char: 'い(イ)', romaji: 'i' }, { char: 'う(ウ)', romaji: 'u' }, { char: 'え(エ)', romaji: 'e' }, { char: 'お(オ)', romaji: 'o' }] },
    { row: 'k', chars: [{ char: 'か(カ)', romaji: 'ka' }, { char: 'き(キ)', romaji: 'ki' }, { char: 'く(ク)', romaji: 'ku' }, { char: 'け(ケ)', romaji: 'ke' }, { char: 'こ(コ)', romaji: 'ko' }] },
    { row: 's', chars: [{ char: 'さ(サ)', romaji: 'sa' }, { char: 'し(シ)', romaji: 'shi' }, { char: 'す(ス)', romaji: 'su' }, { char: 'せ(セ)', romaji: 'se' }, { char: 'そ(ソ)', romaji: 'so' }] },
    { row: 't', chars: [{ char: 'た(タ)', romaji: 'ta' }, { char: 'ち(チ)', romaji: 'chi' }, { char: 'つ(ツ)', romaji: 'tsu' }, { char: 'て(テ)', romaji: 'te' }, { char: 'と(ト)', romaji: 'to' }] },
    { row: 'n', chars: [{ char: 'な(ナ)', romaji: 'na' }, { char: 'に(ニ)', romaji: 'ni' }, { char: 'ぬ(ヌ)', romaji: 'nu' }, { char: 'ね(ネ)', romaji: 'ne' }, { char: 'の(ノ)', romaji: 'no' }] },
    { row: 'h', chars: [{ char: 'は(ハ)', romaji: 'ha' }, { char: 'ひ(ヒ)', romaji: 'hi' }, { char: 'ふ(フ)', romaji: 'fu' }, { char: 'へ(ヘ)', romaji: 'he' }, { char: 'ほ(ホ)', romaji: 'ho' }] },
    { row: 'm', chars: [{ char: 'ま(マ)', romaji: 'ma' }, { char: 'み(ミ)', romaji: 'mi' }, { char: 'む(ム)', romaji: 'mu' }, { char: 'め(メ)', romaji: 'me' }, { char: 'も(モ)', romaji: 'mo' }] },
    { row: 'y', chars: [{ char: 'や(ヤ)', romaji: 'ya' }, { char: '', romaji: '' }, { char: 'ゆ(ユ)', romaji: 'yu' }, { char: '', romaji: '' }, { char: 'よ(ヨ)', romaji: 'yo' }] },
    { row: 'r', chars: [{ char: 'ら(ラ)', romaji: 'ra' }, { char: 'り(リ)', romaji: 'ri' }, { char: 'る(ル)', romaji: 'ru' }, { char: 'れ(レ)', romaji: 're' }, { char: 'ろ(ロ)', romaji: 'ro' }] },
    { row: 'w', chars: [{ char: 'わ(ワ)', romaji: 'wa' }, { char: '', romaji: '' }, { char: '', romaji: '' }, { char: '', romaji: '' }, { char: 'を(ヲ)', romaji: 'wo' }] },
];

const hiragana = [
    { row: '', chars: [{ char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' }, { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' }] },
    { row: 'k', chars: [{ char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' }, { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' }] },
    { row: 's', chars: [{ char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' }, { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' }] },
    { row: 't', chars: [{ char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' }, { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' }] },
    { row: 'h', chars: [{ char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' }, { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' }] },
    { row: 'h', chars: [{ char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' }, { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' }] },
    { row: 'm', chars: [{ char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' }, { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' }] },
    { row: 'y', chars: [{ char: 'や', romaji: 'ya' }, { char: '', romaji: '' }, { char: 'ゆ', romaji: 'yu' }, { char: '', romaji: '' }, { char: 'よ', romaji: 'yo' }] },
    { row: 'r', chars: [{ char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' }, { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' }] },
    { row: 'w', chars: [{ char: 'わ', romaji: 'wa' }, { char: '', romaji: '' }, { char: '', romaji: '' }, { char: '', romaji: '' }, { char: 'を', romaji: 'wo' }] },
];

const FullHiraganaDataWithDiacritics = [
    { row: '', chars: [{ char: 'あ(ア)', romaji: 'a' }, { char: 'い(イ)', romaji: 'i' }, { char: 'う(ウ)', romaji: 'u' }, { char: 'え(エ)', romaji: 'e' }, { char: 'お(オ)', romaji: 'o' }] },
    { row: 'k', chars: [{ char: 'か(カ)', romaji: 'ka' }, { char: 'き(キ)', romaji: 'ki' }, { char: 'く(ク)', romaji: 'ku' }, { char: 'け(ケ)', romaji: 'ke' }, { char: 'こ(コ)', romaji: 'ko' }] },
    { row: 'g', chars: [{ char: 'が(ガ)', romaji: 'ga' }, { char: 'ぎ(ギ)', romaji: 'gi' }, { char: 'ぐ(グ)', romaji: 'gu' }, { char: 'げ(ゲ)', romaji: 'ge' }, { char: 'ご(ゴ)', romaji: 'go' }] },
    { row: 's', chars: [{ char: 'さ(サ)', romaji: 'sa' }, { char: 'し(シ)', romaji: 'shi' }, { char: 'す(ス)', romaji: 'su' }, { char: 'せ(セ)', romaji: 'se' }, { char: 'そ(ソ)', romaji: 'so' }] },
    { row: 'z', chars: [{ char: 'ざ(ザ)', romaji: 'za' }, { char: 'じ(ジ)', romaji: 'ji' }, { char: 'ず(ズ)', romaji: 'zu' }, { char: 'ぜ(ゼ)', romaji: 'ze' }, { char: 'ぞ(ゾ)', romaji: 'zo' }] },
    { row: 't', chars: [{ char: 'た(タ)', romaji: 'ta' }, { char: 'ち(チ)', romaji: 'chi' }, { char: 'つ(ツ)', romaji: 'tsu' }, { char: 'て(テ)', romaji: 'te' }, { char: 'と(ト)', romaji: 'to' }] },
    { row: 'd', chars: [{ char: 'だ(ダ)', romaji: 'da' }, { char: 'ぢ(ヂ)', romaji: 'ji' }, { char: 'づ(ヅ)', romaji: 'zu' }, { char: 'で(デ)', romaji: 'de' }, { char: 'ど(ド)', romaji: 'do' }] },
    { row: 'n', chars: [{ char: 'な(ナ)', romaji: 'na' }, { char: 'に(ニ)', romaji: 'ni' }, { char: 'ぬ(ヌ)', romaji: 'nu' }, { char: 'ね(ネ)', romaji: 'ne' }, { char: 'の(ノ)', romaji: 'no' }] },
    { row: 'h', chars: [{ char: 'は(ハ)', romaji: 'ha' }, { char: 'ひ(ヒ)', romaji: 'hi' }, { char: 'ふ(フ)', romaji: 'fu' }, { char: 'へ(ヘ)', romaji: 'he' }, { char: 'ほ(ホ)', romaji: 'ho' }] },
    { row: 'b', chars: [{ char: 'ば(バ)', romaji: 'ba' }, { char: 'び(ビ)', romaji: 'bi' }, { char: 'ぶ(ブ)', romaji: 'bu' }, { char: 'べ(ベ)', romaji: 'be' }, { char: 'ぼ(ボ)', romaji: 'bo' }] },
    { row: 'p', chars: [{ char: 'ぱ(パ)', romaji: 'pa' }, { char: 'ぴ(ピ)', romaji: 'pi' }, { char: 'ぷ(プ)', romaji: 'pu' }, { char: 'ぺ(ペ)', romaji: 'pe' }, { char: 'ぽ(ポ)', romaji: 'po' }] },
    { row: 'm', chars: [{ char: 'ま(マ)', romaji: 'ma' }, { char: 'み(ミ)', romaji: 'mi' }, { char: 'む(ム)', romaji: 'mu' }, { char: 'め(メ)', romaji: 'me' }, { char: 'も(モ)', romaji: 'mo' }] },
    { row: 'y', chars: [{ char: 'や(ヤ)', romaji: 'ya' }, { char: '', romaji: '' }, { char: 'ゆ(ユ)', romaji: 'yu' }, { char: '', romaji: '' }, { char: 'よ(ヨ)', romaji: 'yo' }] },
    { row: 'r', chars: [{ char: 'ら(ラ)', romaji: 'ra' }, { char: 'り(リ)', romaji: 'ri' }, { char: 'る(ル)', romaji: 'ru' }, { char: 'れ(レ)', romaji: 're' }, { char: 'ろ(ロ)', romaji: 'ro' }] },
    { row: 'w', chars: [{ char: 'わ(ワ)', romaji: 'wa' }, { char: '', romaji: '' }, { char: '', romaji: '' }, { char: '', romaji: '' }, { char: 'を(ヲ)', romaji: 'wo' }] },
];

const hiraganaWithDiacritics = [
    { row: '', chars: [{ char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' }, { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' }] },
    { row: 'k', chars: [{ char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' }, { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' }] },
    { row: 'g', chars: [{ char: 'が', romaji: 'ga' }, { char: 'ぎ', romaji: 'gi' }, { char: 'ぐ', romaji: 'gu' }, { char: 'げ', romaji: 'ge' }, { char: 'ご', romaji: 'go' }] },
    { row: 's', chars: [{ char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' }, { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' }] },
    { row: 'z', chars: [{ char: 'ざ', romaji: 'za' }, { char: 'じ', romaji: 'ji' }, { char: 'ず', romaji: 'zu' }, { char: 'ぜ', romaji: 'ze' }, { char: 'ぞ', romaji: 'zo' }] },
    { row: 't', chars: [{ char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' }, { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' }] },
    { row: 'd', chars: [{ char: 'だ', romaji: 'da' }, { char: 'ぢ', romaji: 'ji' }, { char: 'づ', romaji: 'zu' }, { char: 'で', romaji: 'de' }, { char: 'ど', romaji: 'do' }] },
    { row: 'n', chars: [{ char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' }, { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' }] },
    { row: 'h', chars: [{ char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' }, { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' }] },
    { row: 'b', chars: [{ char: 'ば', romaji: 'ba' }, { char: 'び', romaji: 'bi' }, { char: 'ぶ', romaji: 'bu' }, { char: 'べ', romaji: 'be' }, { char: 'ぼ', romaji: 'bo' }] },
    { row: 'p', chars: [{ char: 'ぱ', romaji: 'pa' }, { char: 'ぴ', romaji: 'pi' }, { char: 'ぷ', romaji: 'pu' }, { char: 'ぺ', romaji: 'pe' }, { char: 'ぽ', romaji: 'po' }] },
    { row: 'm', chars: [{ char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' }, { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' }] },
    { row: 'y', chars: [{ char: 'や', romaji: 'ya' }, { char: '', romaji: '' }, { char: 'ゆ', romaji: 'yu' }, { char: '', romaji: '' }, { char: 'よ', romaji: 'yo' }] },
    { row: 'r', chars: [{ char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' }, { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' }] },
    { row: 'w', chars: [{ char: 'わ', romaji: 'wa' }, { char: '', romaji: '' }, { char: '', romaji: '' }, { char: '', romaji: '' }, { char: 'を', romaji: 'wo' }] },
];

const katakana = [
    { row: '', chars: [{ char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' }, { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' }] },
    { row: 'k', chars: [{ char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' }, { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' }] },
    { row: 's', chars: [{ char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' }, { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' }] },
    { row: 't', chars: [{ char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' }, { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' }] },
    { row: 'n', chars: [{ char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' }, { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' }] },
    { row: 'h', chars: [{ char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' }, { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' }] },
    { row: 'm', chars: [{ char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' }, { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' }] },
    { row: 'y', chars: [{ char: 'ヤ', romaji: 'ya' }, { char: '', romaji: '' }, { char: 'ユ', romaji: 'yu' }, { char: '', romaji: '' }, { char: 'ヨ', romaji: 'yo' }] },
    { row: 'r', chars: [{ char: 'ラ', romaji: 'ra' }, { char: 'リ', romaji: 'ri' }, { char: 'ル', romaji: 'ru' }, { char: 'レ', romaji: 're' }, { char: 'ロ', romaji: 'ro' }] },
    { row: 'w', chars: [{ char: 'ワ', romaji: 'wa' }, { char: '', romaji: '' }, { char: '', romaji: '' }, { char: '', romaji: '' }, { char: 'ヲ', romaji: 'wo' }] },
];

const katakanaWithDiacritics = [
    { row: '', chars: [{ char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' }, { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' }] },
    { row: 'k', chars: [{ char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' }, { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' }] },
    { row: 'g', chars: [{ char: 'ガ', romaji: 'ga' }, { char: 'ギ', romaji: 'gi' }, { char: 'グ', romaji: 'gu' }, { char: 'ゲ', romaji: 'ge' }, { char: 'ゴ', romaji: 'go' }] },
    { row: 's', chars: [{ char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' }, { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' }] },
    { row: 'z', chars: [{ char: 'ザ', romaji: 'za' }, { char: 'ジ', romaji: 'ji' }, { char: 'ズ', romaji: 'zu' }, { char: 'ゼ', romaji: 'ze' }, { char: 'ゾ', romaji: 'zo' }] },
    { row: 't', chars: [{ char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' }, { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' }] },
    { row: 'd', chars: [{ char: 'ダ', romaji: 'da' }, { char: 'ヂ', romaji: 'ji' }, { char: 'ヅ', romaji: 'zu' }, { char: 'デ', romaji: 'de' }, { char: 'ド', romaji: 'do' }] },
    { row: 'n', chars: [{ char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' }, { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' }] },
    { row: 'h', chars: [{ char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' }, { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' }] },
    { row: 'b', chars: [{ char: 'バ', romaji: 'ba' }, { char: 'ビ', romaji: 'bi' }, { char: 'ブ', romaji: 'bu' }, { char: 'ベ', romaji: 'be' }, { char: 'ボ', romaji: 'bo' }] },
    { row: 'p', chars: [{ char: 'パ', romaji: 'pa' }, { char: 'ピ', romaji: 'pi' }, { char: 'プ', romaji: 'pu' }, { char: 'ペ', romaji: 'pe' }, { char: 'ポ', romaji: 'po' }] },
    { row: 'm', chars: [{ char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' }, { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' }] },
    { row: 'y', chars: [{ char: 'ヤ', romaji: 'ya' }, { char: '', romaji: '' }, { char: 'ユ', romaji: 'yu' }, { char: '', romaji: '' }, { char: 'ヨ', romaji: 'yo' }] },
    { row: 'r', chars: [{ char: 'ラ', romaji: 'ra' }, { char: 'リ', romaji: 'ri' }, { char: 'ル', romaji: 'ru' }, { char: 'レ', romaji: 're' }, { char: 'ロ', romaji: 'ro' }] },
    { row: 'w', chars: [{ char: 'ワ', romaji: 'wa' }, { char: '', romaji: '' }, { char: '', romaji: '' }, { char: '', romaji: '' }, { char: 'ヲ', romaji: 'wo' }] },
];

const DiacriticsRow = ['g','z','d','b','p']


export {
    FullHiraganaData,
    hiragana,
    katakana,
    FullHiraganaDataWithDiacritics,
    hiraganaWithDiacritics,
    katakanaWithDiacritics,
    DiacriticsRow
}