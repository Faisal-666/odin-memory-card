const responseTransformer = (res) => {
    return res.map(({ id, title, images }) => {
        return {
            id,
            title,
            url: images.original.url,
        };
    });
};

export default responseTransformer;