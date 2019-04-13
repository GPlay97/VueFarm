<template>
    <v-container class="plant-container">
        <v-img class="plant-img" :src="require(`@/assets/img/${plant.name}_${plant.state}.png`)" aspect-ratio="1"
            height="64px" margin width="64px" :contain="true" @click="grow()"></v-img>
        <p v-if="plant.state" class="text-xs-center plant-time">00:55</p>
    </v-container>
</template>

<script>
    export default {
        props: {
            state: Number,
            name: String
        },
        data: () => ({
            plant: {
                state: 0,
                name: 'soil'
            }
        }),
        methods: {
            grow() {
                this.plant.state = 1;
                this.$emit('growed', this);
            }
        },
        created() {
            this.$set(this.plant, require(`@/assets/plants/${this.plant.name}.json`));
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
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
        border-radius: 2px;
        color: #fff;
        opacity: 0.9;
    }
</style>