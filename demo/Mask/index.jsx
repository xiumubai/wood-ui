import React, { useState } from 'react';
import { Button, Mask } from '@xiumu/wood-ui';

export default function App() {
  const [ visible, setVisible ] = useState(false);
  return (
    <>
      {/* <Button type="primary" onClick={() => setVisible(true)}>打开遮罩</Button> */}
      <Mask/>
    </>
  );
}
