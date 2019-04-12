<template>
    <v-img :src="require(`@/assets/img/${plant.name}_${plant.state}.png`)" aspect-ratio="1" height="64px" width="64px" :contain="true" @click="grow()"></v-img>
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
            console.log(require(`@/assets/plants/soil.json`));
            this.plant.state = this.state;
            this.plant.plant = this.plant;
        }
    }
</script>

<style scoped>

</style>