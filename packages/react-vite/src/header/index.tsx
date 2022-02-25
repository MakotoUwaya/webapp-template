import { AppBar, Typography, Toolbar } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import { useState } from 'react';

import DarkModeToggle from './DarkModeToggle';

import { db } from '@/firebase';

type AppInfo = {
  title: string;
};

const Header = (): JSX.Element => {
  const [title, setTitle] = useState('');
  getDoc(doc(db, 'app/info')).then(doc => {
    const data = doc.data();
    if (data) {
      setTitle((data as AppInfo).title);
    }
  });
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
