const generateJson = (level, childrenLength) => {
    const root = {};
    if (level === 0) {
        return;
    }

    for (let i = 0; i < Math.floor(Math.random() * parseInt(childrenLength)); i++) {
        root[`key${i}`] = generateJson(level - 1, childrenLength);
    }
    return root;
};

generateJson(4, 3);
