export const validateAuthContact = (values) => {
        const errors = {};
        if (!values.firstlastName) {
          errors.firstlastName = 'Enter your name';
        } else if (/[.;,<>$&!~`^*:"}{\][|\\?%0-9]/.test(values.firstlastName)) {
          errors.firstlastName = 'Enter correct name';
        } else if (!values.email) {
          errors.email = 'Enter your e-mail address';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Wrong e-mail address';
        } else if (!values.text) {
          errors.text = 'Enter a message';
        }

        return errors;
      
    }

    