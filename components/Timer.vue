<template>
    <div>
        <span>{{ getDaysFromTimeLeft | addLeadingZero }}</span>
        <span>:</span>
        <span>{{ getHoursFromTimeLeft | addLeadingZero }}</span>
        <span>:</span>
        <span>{{ getMinutesFromTimeLeft | addLeadingZero }}</span>
        <span>:</span>
        <span>{{ getSecondsFromTimeLeft | addLeadingZero }}</span>
    </div>
</template>

<script>
export default {
    filters: {
        addLeadingZero(value) {
            if (value < 10) {
                return `0${value}`;
            } else {
                return value;
            }
        }
    },
    props: {
        expiredDate: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            timeLeft: 0,
            timer: {}
        };
    },
    computed: {
        expiredDateInMilliseconds() {
            return new Date(this.expiredDate).getTime();
        },
        getDaysFromTimeLeft() {
            return Math.floor(this.timeLeft / (1000 * 60 * 60 * 24));
        },
        getHoursFromTimeLeft() {
            return Math.floor(
                (this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
        },
        getMinutesFromTimeLeft() {
            return Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        },
        getSecondsFromTimeLeft() {
            return Math.floor((this.timeLeft % (1000 * 60)) / 1000);
        }
    },
    mounted() {
        this.startCountdown();
    },
    methods: {
        startCountdown() {
            this.timer = setInterval(() => {
                const now = new Date().getTime();
                this.timeLeft = this.expiredDateInMilliseconds - now;
            }, 1000);
        }
    }
};
</script>
