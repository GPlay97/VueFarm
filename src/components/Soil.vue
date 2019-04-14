<template>
    <v-container class="plant-container" @click="plantSelector">
        <v-img class="plant-img" :src="plantImg" aspect-ratio="1" height="64px" margin width="64px" :contain="true">
        </v-img>
        <p v-if="plant.name !== 'soil' && plant.state + 1 <= plant.states.length" class="text-xs-center plant-time">{{ plantTime }}</p>
    </v-container>
</template>

<script>
    import {
        setTimeout,
        clearInterval,
        setInterval
    } from 'timers';
    export default {
        props: {
            state: Number,
            name: String
        },
        data: () => ({
            plant: {
                state: 0,
                states: [],
                time: 0,
                cost: 0,
                gold: 0,
                xp: 0,
                name: 'soil'
            },
            plantTime: 0,
            plantInterval: 0
        }),
        computed: {
            plantImg() {
                return require(`@/assets/img/${this.plant.name}_${this.plant.state}.png`);
            }
        },
        methods: {
            setPlant(name) {
                var plant = require(`@/assets/plants/${name}.json`);

                Object.keys(plant).forEach((key) => this.$set(this.plant, key, plant[key]));
            },
            startGrow() {
                var self = this;

                console.log('start grow');

                setTimeout(() => {
                    console.log('growed');
                    self.plant.state++;
                    if (self.plant.states[self.plant.state]) {
                        self.startGrow();
                    } else {
                        console.log('Fully growed');
                        self.$emit('growed', this);
                        clearInterval(self.plantInterval);
                    }
                }, self.plant.states[self.plant.state] * 1000);

                if (!self.plantInterval) {
                    self.plantInterval = setInterval(() => {
                        self.plantTime = parseInt(new Date().getTime() / 1000) - (self.plant.planted + self
                            .plant.time);
                    }, 1000);
                }
            },
            plantSelector() {
                if (this.plant.name === 'soil') this.$emit('unplanted', this);
            },
            plantField(name) {
                console.log('plant field', name);
                this.setPlant(name);
                this.plant.planted = parseInt(new Date().getTime() / 1000);
                this.plant.state = 0;
                this.plantTime = this.plant.time;
                this.startGrow();
            }
        },
        created() {
            this.setPlant(this.plant.name);
            this.plant.state = this.state;
        }
    }
</script>

<style scoped>
    .plant-container {
        padding: 0;
    }

    .plant-img {
        margin: auto;
    }

    .plant-time {
        background: #616161;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        border-radius: 2px;
        color: #fff;
        opacity: 0.9;
    }
</style>