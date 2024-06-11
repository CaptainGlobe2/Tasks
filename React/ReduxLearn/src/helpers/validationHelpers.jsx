export const validateEmail = (email) => {
    const check = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return check.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
    const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
    return check.test(password);
};