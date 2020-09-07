export const validateAuth = (values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Enter your first name';
        } else if (/[.;,<>$&!~`^*:"}{\][|\\?%0-9]/.test(values.firstName)) {
          errors.firstName = 'Enter your first name correctly';
        } else if (!values.lastName) {
          errors.lastName = 'Enter your last name';
        } else if (/[.;,<>$&!~`^*:"}{\][|\\?%0-9]/.test(values.lastName)) {
          errors.lastName = 'Enter your last name correctly';
        } else if (!values.address) {
          errors.address = 'Enter your address';
        } else if (/[;<>$!~`^*:}{\][|\\?%]/.test(values.address)) {
          errors.address = 'Enter your address correctly';
        } else if (!values.city) {
          errors.city = 'Enter your town';
        } else if (/[.;,<>$&!~`^*:"}{\][|\\?%0-9]/.test(values.city)) {
          errors.city = 'Enter your town correctly';
        } else if (!values.phone) {
          errors.phone = 'Enter your phone';
        } else if (!/^[0-9\b]+$/.test(values.phone)) {
          errors.phone = 'Enter number digits only without spaces';
        } else if (!values.email) {
            errors.email = 'Enter your email';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Wrong e-mail address';
          } 

        return errors;
      
    }

    