import { Helmet } from 'react-helmet';
import Signin from '../../components/Auth/Login';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Task-Master | Login</title>
      </Helmet>
      <Signin />
    </>
  );
};
export default Login;
