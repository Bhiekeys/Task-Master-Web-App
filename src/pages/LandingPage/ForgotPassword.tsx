import { Helmet } from 'react-helmet';
import ForgotPass from '../../components/Auth/ForgotPassword';

const ForgotPassword = () => {
  return (
    <>
      <Helmet>
        <title>Task-Master | ForgotPassword</title>
      </Helmet>
      <ForgotPass />
    </>
  );
};
export default ForgotPassword;
