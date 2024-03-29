import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer
      className="mt-auto"
      style={{
        // position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',

      }}
    >
        {/* Container to hold footer content */}
      <div className="container text-left">
         {/* Render 'Go Back' button only if not on the home page */}
        {location.pathname !== '/' && (
          <button className="btn btn-sm mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        {/* Footer text */}
        <h4 style={{ fontSize: '12px' }}>
          &copy; {new Date().getFullYear()} - Plot Pursuit Made with readers in mind           by: Daelyn Hiduchick, Conner Martin, and Shinayomi Ogunbayo
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
