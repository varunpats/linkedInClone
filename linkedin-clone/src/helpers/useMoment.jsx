import moment from 'moment/moment';

export const getCurrentTime = (timeFormat) => {
    return moment().format(timeFormat);
}