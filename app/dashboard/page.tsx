import Button from '@mui/material/Button';

export default function Demo() {
  return (
    <div>
      {/* <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>欢迎来到日语学习应用</h1> */}
      <p style={{ marginBottom: '2rem' }}>
        {/* 这是一个帮助您学习日语词汇、语法和进行测验的应用。 */}
        选择以下模块开始：
      </p>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Button variant="contained">Hello world</Button>;
          <h2>Hiragana Char &rarr;</h2>
      </div>
    </div>
  );
}
