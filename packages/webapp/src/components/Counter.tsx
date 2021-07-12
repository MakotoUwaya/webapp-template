import { Button } from '@material-ui/core';
import React, { useState } from 'react';

type Props = {
  title: string;
  isPrimary: boolean;
  description?: string;
  defaultValue?: string;
};

const MyComponent = (props: Props): JSX.Element => {
  const { title, description, isPrimary } = props;
  const [count, setCount] = useState(0);

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
