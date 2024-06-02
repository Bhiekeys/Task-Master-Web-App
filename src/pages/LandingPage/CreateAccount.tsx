import { Helmet } from 'react-helmet';
import AccountCreation from '../../components/Auth/CreateAccount';

const CreateAccount = () => {
  return (
    <>
      <Helmet>
        <title>Task-Master | Sign up</title>
      </Helmet>
      <AccountCreation />
    </>
  );
};
export default CreateAccount;
