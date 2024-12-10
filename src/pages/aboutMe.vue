<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'
</script>

<template>
    <Header></Header>
    <section class="about__me">
        <div class="control">
            <p class="about__me-title">ОБО МНЕ</p>
            <div class="about__me-information">
              <div class="about__me-photo">
                <img src="/image/iam.png" class="about__me-photo-iam">
              </div>
              <div class="about-me__name-text">
                <p class="about-me__name-text-title">Меня зовут Марина</p>
                <p class="about-me__name-text-main-one">Я разрабатываю дизайны в разных отрослях,</br>а так же верстаю сайты</p>
                <p class="about-me__name-text-main-two">Я занимаюсь дизайном уже несколько лет.</br> Люблю пробовать что-то новое в дизайне,</br> сочетая стиль, изящность, креативность</br> и привлекательность. Вместе с Вами мы</br> создадим самый говорящий и красивый дизайн!</p>
                <button class="about-me-bottom button_main">
                  Услуги
                </button>
              </div>
            </div>
        </div>
      </section>
      <Footer></Footer>
    </template>