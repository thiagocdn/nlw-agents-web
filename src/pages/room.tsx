import { Navigate, useParams } from 'react-router-dom';

type RoomsParams = {
  roomId: string;
};

export function Room() {
  const params = useParams<RoomsParams>();

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }
  return <div>{JSON.stringify(params)}</div>;
}
