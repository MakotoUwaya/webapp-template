import { Button } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import {
  addDoc,
  collection,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import { db } from '@/firebase';

type Info = {
  id: number;
  description: string;
  value: number;
};

const hasProperties = <K extends PropertyKey>(
  obj: unknown,
  ...props: Array<K>
): obj is { [P in K]: unknown } => {
  return obj instanceof Object && props.every((prop) => prop in obj);
};

const isInfo = (item: unknown): item is Info => {
  return hasProperties(item, 'id', 'description', 'value');
};

const Information = (): JSX.Element => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'id', width: 50 },
    { field: 'description', headerName: 'description', width: 250 },
    { field: 'value', headerName: 'value', width: 100 },
  ];
  const ref = collection(db, 'information');
  const sortedQuery = query(ref, orderBy('id'));
  const [value, loading, error] = useCollection(sortedQuery);
  const addInfo = () => {
    addDoc(ref, {
      id: (value?.size || 0) + 1,
      description: '追加されたデータです',
      value: 12345,
    });
  };
  const updateInfo = () => {
    if (!value || value.empty) {
      return;
    }
    const updateRef = value.docs[value.size - 1].ref;
    updateDoc(updateRef, {
      description: '更新されたデータです',
    });
  };

  if (error) {
    return <strong>Error: {JSON.stringify(error)}</strong>;
  }
  if (loading) {
    return <span>Collection: Loading...</span>;
  }

  return (
    <div style={{ width: '80vw' }}>
      <h2>Information</h2>
      <Button onClick={addInfo}>Add Information</Button>
      <Button onClick={updateInfo}>Update Information</Button>
      {value && (
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid
            rows={value.docs.map((d) => d.data()).filter(isInfo)}
            columns={columns}
          />
        </div>
      )}
    </div>
  );
};

export default Information;
