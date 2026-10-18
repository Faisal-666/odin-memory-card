import { useState } from 'react';

const useListImages = () => {
    const [imgs, setImgs] = useState();
    
    const markImage = (id) => {
        setImgs((prev) =>
            prev.map((img) => 
                img.id === id 
                    ? { ...img, marked: true } 
                    : img
                )
        );
    };

    const shuffle = () => {
        setImgs(prev => {
            const arr = [...prev];

            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }

            return arr;
        });
    };

    return {
        imgs,
        setImgs,
        markImage,
        shuffle
    };
};

export default useListImages;