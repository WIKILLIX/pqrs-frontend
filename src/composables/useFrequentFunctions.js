const frecuentFunctions = () => {
    const idUrl = () => {
        const url = window.location.href;
        return url.split("/").slice(-1)[0];
    };

    return {
        idUrl,
    };
};

export default frecuentFunctions;
