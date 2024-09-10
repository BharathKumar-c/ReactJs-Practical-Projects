import {FeatureFlagServiceCall} from '../data';

const {createContext, useState, useEffect} = require('react');

export const FeatureFlagContext = createContext(null);
const FeatureFlagGlobalState = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [enableFlag, setEnableFlag] = useState({});

  async function fetchFeatureFlag() {
    setLoading(true);
    try {
      const res = await FeatureFlagServiceCall();
      setEnableFlag(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeatureFlag();
  }, []);
  return (
    <FeatureFlagContext.Provider value={{enableFlag, loading}}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export default FeatureFlagGlobalState;
