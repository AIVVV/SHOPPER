//function for creating object information for elements

// export const createTitle = (propertyName, name) => propertyName: name;

// export const createProperty = () => { };

// export const createOptions = (propertyName,) => {};

export const is_Mobile = () => {
    let is_mobile = null;
    window.addEventListener('resize', () => {
        let mobile = 959;
        let width;

        if(window.innerWidth !== undefined && window.innerHeight !== undefined) {
            width = window.innerWidth;
        } else {
            width = document.documentElement.clientWidth;
        }
        console.log(width);
        width < mobile ? is_mobile = true : is_mobile = false;
        console.log(is_mobile);
    });


    return is_mobile;
};


