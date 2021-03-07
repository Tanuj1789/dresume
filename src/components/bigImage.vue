<template>
    <div  :key="find()">
    <div v-if="(x)%2" >
        <div class="outer">
        <!-- <h1 style="colour:'blue">tanuj</h1> -->
        <img src="@/assets/cross.png"  v-on:click="close()" class="small" >
        <img v-bind:class="{myclass:true}" :src="getImgUrl(bg)" alt="close" >
        </div>
    </div>
    </div>

</template>
<script>
export default {
    name:'bigImage',
    props:[
        'bg','show'
    ],
    data(){
        return {
            x:this.show
        }
    },
    methods:{
            find()
            {
                this.x=this.show
            },
           getImgUrl(pet) {
            var images = require.context('../assets/', false, /\.png$/)
            return images('./' + pet + ".png")

            },
            updateParentShow(){
                this.$emit('updateshow')
            },
            close(){
                console.log('show',this.show)
                    this.x++
                    this.updateParentShow();

            },
    },
}
</script>
<style scoped>
.outer{
    display:flex;
    flex-direction: column;
    z-index: 1;
    padding:5%;
    width:100%;
    height:100vh;
    align-content: center;
    justify-content: center;
    position:absolute;

}
.myclass{
        z-index: 1;
        opacity:1;
        border-radius:5%;
        min-height:90%;
        max-height:100%;
        min-width:80%;
        max-width:90%;
        align-self:center;
        background: blue;
    }
.small{
    height:50px;
    width:50px;
    align-self:center;
    filter:grayscale(0%);
}
</style>