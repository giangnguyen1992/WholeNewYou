export default {
    methods: {
        setLocalStorage(key, value) {
            if (typeof key !== 'string' || typeof value === 'undefined') {
                return false;
            }
            let storage;
            try {
                storage = window.localStorage;
            } catch (e) {
                return false;
            }
            if (storage) {
                const valueJSON = JSON.stringify(value);
                storage.setItem(key, valueJSON);
                return true;
            }
            return false;
        },
        getLocalStorage(key) {
            if (typeof key !== 'string') {
                return undefined;
            }
            let storage;
            try {
                storage = window.localStorage;
            } catch (e) {
                return undefined;
            }
            if (storage && storage.getItem(key)) {
                const parsedValue = JSON.parse(storage.getItem(key));
                return parsedValue;
            }
            return undefined;
        }
    }
};
