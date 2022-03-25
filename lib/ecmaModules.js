module.exports = {
    fileType: (async () => {
        return await import('file-type');
    })()
};
