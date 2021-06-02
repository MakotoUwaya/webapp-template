import { Button } from "@material-ui/core";
import React, { useState, useEffect, VFC } from 'react'

type Props = {
  title: string;
  isPrimary: boolean;
  description?: string;
  defaultValue?: string;
};

const MyComponent: VFC<Props> = (props) => {
  // propsを参照
  const { title, description, isPrimary } = props;
  // コンポーネント内のステート
  const [count, setCount] = useState(0);
  // ライフサイクルメソッド
  useEffect(() => {
    // 作成時（初回レンダリング直後）に呼ばれる箇所
    return () => {
      // 終了時に呼ばれる箇所
    };
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      {description ? <section>{description}</section> : null}
      <Button
        variant="contained"
        color={isPrimary ? 'primary' : 'default'}
        onClick={() => setCount(count + 1)}
      >
        {count}
      </Button>
    </div>
  );
};

export default MyComponent;