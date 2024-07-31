import { Link, useLocation } from 'react-router-dom';
import background from '../../assets/background.png';
import emailverify from '../../assets/emailverification.png';
import { useEffect, useState } from 'react';

const ConfirmEmail = () => {
  const location = useLocation();
  const { email } = location.state || {};
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);
  return (
    <>
      {imageLoaded ? (
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div className="w-full flex justify-between flex-col px-5 md:px-0 py-10 md:py-0">
            <Link
              to="/"
              className="text-white md:text-left  text-center text-2xl font-kadwa pb-7 md:ml-[98px] w-fit">
              Task Master
            </Link>
            <div className="flex justify-center">
              <div className="bg-white  pt-20 h-[470px] max-w-[440px] w-full px-5 md:px-[45px] rounded-[10px]">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="font-semibold text-xl">Confirm your email</h2>
                  <p className="text-sm mt-1">
                    A confirmation email has been sent to{' '}
                    <span className="text-[#46917380]">{email}</span>. Please
                    check your inbox or spam folder and click on the link to
                    confirm your email address.
                  </p>
                  <div className="flex justify-center mt-6">
                    <img src={emailverify} alt="emailVerification" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          Loading ...
        </div>
      )}
    </>
  );
};
export default ConfirmEmail;
