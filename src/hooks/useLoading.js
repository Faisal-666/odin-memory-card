import { useState } from 'react';

const useLoading = (init) => {
    const [isLoading, setLoading] = useState(init);

    return {
        isLoading,
        setLoading,
    };
};

export default useLoading;