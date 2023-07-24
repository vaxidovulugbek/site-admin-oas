import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";

dayjs.extend(duration);
dayjs.extend(utc);

const time = {
    formatDuration: (duration, format = "DD:HH:mm") => {
        return dayjs.duration(duration * 1000).format(format);
    },

    formatSecondsToHours: (totalSeconds) => {
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);

        if (hours < 10) hours = "0" + hours;
        if (hours === 0) hours = "00";
        if (minutes < 10) minutes = "0" + minutes;

        return `${hours}:${minutes}`;
    },

    formatHourToSecond: (hours) => {
        const hour = hours.split(":")[0];
        const minut = hours.split(":")[1];

        const total = parseInt(hour) * 60 * 60 + parseInt(minut) * 60;
        return total;
    },

    toHours: (seconds) => {
        return dayjs
            .duration({
                seconds,
            })
            .asHours();
    },

    addTime: (date, value, unit) => {
        return dayjs(date).add(value, unit).toDate();
    },

    toTimestamp: (date) => dayjs(date).utc(true).unix(),

    toDate: (timestamp) =>
        timestamp
            ? dayjs.unix(timestamp).toDate()
            : dayjs().startOf("day").toDate(),

    toISOString: (timestamp) =>
        timestamp ? dayjs.unix(timestamp).toISOString() : dayjs().toISOString(),

    toMilliSeconds: (timestamp) => timestamp * 1000,

    formatTimestamp: (timestamp, format = "DD.MM.YYYY HH:mm") =>
        timestamp ? dayjs.unix(timestamp).format(format) : "",

    addDateToday: (timestamp) =>
        dayjs().startOf("day").add(timestamp, "second").unix(),

    getCurrentTime: () => dayjs().toDate(),

    getFromHours: (time = "") => {
        const formattedTime = time.split(":");
        const hours = parseInt(formattedTime[0]);
        const minutes = parseInt(formattedTime[1]);

        return dayjs().add(hours, "hour").add(minutes, "minute").unix();
    },
};

export default time;
