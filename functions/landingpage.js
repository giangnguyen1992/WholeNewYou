const landingpage = require('../data/landingpage.json');

// eslint-disable-next-line require-await
exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(landingpage)
    };
};
