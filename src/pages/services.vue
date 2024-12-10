<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'
</script>

<template>
    <Header></Header>
    <section class="services">
      <div class="control">
        <p class="services__title">УСЛУГИ</p>
        <div class="services__search">
          <input type="text" class="search" placeholder="Найти...">
          <button class="button_main">
            Поиск
          </button>
        </div>
        <div class="services__services">
          <div class="services__services-one">
            <div class="services__def one">
              <img src="/image/def-one.png" class="services__def-img">
              <p class="services__def-title">Сайт</p>
              <p class="services__def-text">От 10000 руб</p>
              <button class="services__bottom button_main">Заказать</button>
            </div>
            <div class="services__def two">
              <img src="/image/def-two.png" class="services__def-img">
                <p class="services__def-title">Сообщество</p>
                <p class="services__def-text">От 1500 руб</p>
                <button class="services__bottom button_main">Заказать</button>
            </div>
            <div class="services__def three">
              <img src="/image/def-three.png" class="services__def-img">
                <p class="services__def-title">Визитка</p>
                <p class="services__def-text">От 1000 руб</p>
                <button class="services__bottom button_main">Заказать</button>
            </div>
          </div>
          <div class="services__services-two">
            <div class="services__def four">
              <img src="/image/def-four.png" class="services__def-img">
              <p class="services__def-title">Презентация</p>
              <p class="services__def-text">От 2000 руб</p>
              <button class="services__bottom button_main">Заказать</button>
            </div>
            <div class="services__def five">
              <img src="/image/def-five.png" class="services__def-img">
                <p class="services__def-title">Флаер</p>
                <p class="services__def-text">От 1200 руб</p>
                <button class="services__bottom button_main">Заказать</button>
            </div>
            <div class="services__def five">
              <img src="/image/def-six.png" class="services__def-img">
                <p class="services__def-title">Открытка</p>
                <p class="services__def-text">От 1000 руб</p>
                <button class="services__bottom button_main">Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
</template>