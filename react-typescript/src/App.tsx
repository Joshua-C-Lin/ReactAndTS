import React, { useState } from 'react';
import './App.css';

// type TitleProps = {
//   name: string
// }

// 假設是 export 出去的
interface TitleProps {
  name: string
}

// 假設是 import 進來的
interface TitleProps {
  desc?: string
}

const Title: React.FC<TitleProps> = ({name, desc}) => {
  // 假設今天沒有寫 desc
  if(desc === undefined) {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{name}</h1>
      <h2>{desc}</h2>
    </div>
  )
}

const App: React.FC = () => {
  const [title, setTitle] = useState<number | string>(1024)

  return (
    <div>
      <h1>{title}</h1>
      <Title name="Joshua" desc="FE Dev" />
      <Title name="Annie" />
    </div>
  );
}

export default App;
