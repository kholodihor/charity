<template>
    <div class="card" data-test="card">
        <div class="image">
            <img :src="require(`@/assets/img/${props.image}.webp`)" />
        </div>
        <RangeSlider :myValue="props.raised / props.goal" />
        <div class="card-content">
            <span>{{ props.subtitle }}</span>
            <h3>{{ props.title }}</h3>
            <div class="card-footer">
                <div class="footer-item">
                    <i class="fas fa-globe"></i>Goal <span data-test="goal">${{ props.goal }}</span>
                </div>
                <div class="footer-item">
                    <i class="fas fa-users"></i>Raised <span>${{ props.raised }}</span>
                </div>
                <div class="footer-item">
                    <i class="fas fa-exclamation"></i>To go
                    <span>${{ props.goal - props.raised }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import RangeSlider from './RangeSlider.vue';

const props = defineProps({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },

    raised: {
        type: Number,
        required: true
    },
    goal: {
        type: Number,
        required: true
    },
});

</script>

<style scoped lang="scss">
.card {
    width: 30%;
    padding: 0.2rem;
    margin: 1rem;
    border: 1px solid $black;
    margin-bottom: 2rem;
    border-radius: 1rem;

    @media (max-width: 750px) {
        width: 100%;
        transition: all 0.5s ease;
    }

    &:hover {
        box-shadow: -5px 5px 0 rgba(0, 0, 0, 0.3);
    }

    .image {
        width: 100%;
        border-radius: 1rem;
        overflow: hidden;
        transition: all 0.8s ease;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1rem;
            overflow: hidden;
            transition: all 0.8s ease;
        }

        &:hover img {
            transform: scale(1.1);
        }
    }

    .card-content {
        width: 100%;
        padding: 0.5rem;
        margin-bottom: auto;

        span {
            color: $red;
            font-size: 2rem;
            font-family: 'Shalimar';
        }

        h3 {
            font-weight: 500;
            color: $blue;
        }
    }

    .card-footer {
        width: 100%;
        display: flex;
        margin: 2rem 0 1rem;

        .footer-item {
            width: 33%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 0.5rem;
            text-align: center;
            color: #666;

            span {
                font-family: 'Roboto';
                color: $coral;
                margin-top: 0.55rem;
                font-size: 1.3rem;
            }
        }
    }
}
</style>