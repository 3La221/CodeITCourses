// withCurrentPath.js
import { useRouter } from 'next/router';

const withCurrentPath = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    return <WrappedComponent {...props} currentPath={router.pathname} />;
  };
};

export default withCurrentPath;