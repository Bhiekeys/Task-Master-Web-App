import { Helmet } from 'react-helmet';
import Head from '../../components/Dashboard/Today/Head';

const Today = () => {
  return (
    <>
      <Helmet>
        <title>Task-Master | Today</title>
      </Helmet>
      <Head />
    </>
  );
};
export default Today;
