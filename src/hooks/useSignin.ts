import { useEffect, useState } from 'react';

const useSignIn = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // when enter component
  useEffect(() => {
    // method
    console.log('get data...');
    // when exit component
    return () => {
      console.log('quit component');
    };
  }, []);


  // when enter and listen to data component
  useEffect(() => {
    // method
    console.log('update....');
  }, [email]);


  const handleSubmit = () => {
    setLoading(true);
    try {
      // api call
      // sortir data
      // show success
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    } catch (error) {
      // show error
    }
    console.log('ini email', email);
  };

  return { email, setEmail, handleSubmit, loading };
};

export default useSignIn;
