import GoTrue from 'gotrue-js';

export default (context, inject) => {
    const auth = new GoTrue({
        APIUrl: 'https://wholenewyou.de/.netlify/identity',
        audience: '',
        setCookie: true
    });

    inject('auth', auth);
    context.$auth = auth;
};
