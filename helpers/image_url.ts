type Asset = {
    filename: string;
};

const imageUrl = (url: string | Asset) => {
    if (url === null || url === undefined) return '';
    if (typeof url === 'object') {
        return url.filename;
    }
    return url.replace('//', 'https://');
};

export default imageUrl;
