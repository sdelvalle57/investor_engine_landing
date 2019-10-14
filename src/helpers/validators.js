export const validateEmail = (email) => {
    email = email.trim();
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}