
const { Storage } = require('@google-cloud/storage');

const storage = new Storage({ keyFilename: 'keys/uploads.json' });
const bucket = storage.bucket('arka_contracts');

const cloudUtils = {
    upload: async (filePath, destFileName) => {
        await bucket.upload(filePath, {
            destination: destFileName,
        });
        return `${destFileName}`;
    },
    getFile: async fileName => {
        const [url] = await bucket.file(fileName).getSignedUrl({
            version: 'v4',
            action: 'read',
            expires: Date.now() + 15 * 60 * 1000, // 15 minutos
        });
        return url;
    }
}
module.exports = cloudUtils;
