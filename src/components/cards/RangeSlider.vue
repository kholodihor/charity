<template>
<div class="container">
    <input :value="myValue" type="range" class="range-slider" min="0" max="1" step="0.1">
    <span class="range-value">{{myValue.toFixed(2) * 100}}%</span>
</div>
</template>
<script setup lang="ts">
import {defineProps} from 'vue'

defineProps({
  myValue: {
    type: Number,
    default: 0,
  },

})

</script>
<style scoped lang="scss">
@import '../../assets/styles/variables.scss';
.container{
    position: relative;
    height: 50px;
    width: 100%;
    margin: 5px auto;
    
    .range-slider{
        position: absolute;
        top: 50%;
        left: 20%;
        transform: translate(-20%,-50%);
         appearance: none;
        width: 80%;
        height: 5px;
        background-color: $coral;
        border-radius: 1rem;
        outline: none;
      
        &::-webkit-slider-thumb{
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background-color: $coral;
            cursor: pointer;
        }
        &::-moz-range-thumb{
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background-color: $coral;
            border: none;
            cursor: pointer;
        }
    }
    .range-value{
        position: absolute;
        background-color: #fff;
        top: 50%;
        right: -3%;
        transform: translate(-50%,-50%);
        width: 42px;
        height: 30px;
        border-radius: 0.5rem;
        color: $gray;
        font-weight: 600;
        border: 1px solid $gray;
        display: flex;
        justify-content: center;
        align-items: center;

        &::before{
            position: absolute;
            content: '';
            height: 10px;
            width: 10px;
            background-color: #fff;
            top: 8px;
            left: -6px;
        border-top: 1px solid transparent;
        border-bottom: 1px solid $gray;
        border-left: 1px solid $gray;
        border-right: 1px solid transparent;
        transform: rotate(45deg);
        }
        
    }
}


</style>