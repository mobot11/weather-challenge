export const getIcon = (icon, iconObject) => {
    let iconCss = iconObject.default;

    if (iconObject.hasOwnProperty(icon)) {
        iconCss = iconObject[icon];
    }

    return iconCss;
};

export const getPercentage = (num) => {
    return num * 100;
};
