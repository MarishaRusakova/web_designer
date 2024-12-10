<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'
</script>

<template>
    <Header></Header>
    <section class="order">
      <div class="control">
        <p class="order-title">ЗАКАЗАТЬ</p>
        <div class="order__main-block">
          <div class="order__one-block">
            <div class="order__services">
              <p class="order__one-title">Выберите услуги:</p>
              <div class="order__radio-block"><input type="checkbox" class="order__radio"><p class="order__radio-text">Дизайн сайта</p></div>
              <div class="order__radio-block"><input type="checkbox" class="order__radio"><p class="order__radio-text">Дизайн сообщества</p></div>
              <div class="order__radio-block"><input type="checkbox" class="order__radio"><p class="order__radio-text">Дизайн визитки</p></div>
              <div class="order__radio-block"><input type="checkbox" class="order__radio"><p class="order__radio-text">Дизайн презентации</p></div>
              <div class="order__radio-block"><input type="checkbox" class="order__radio"><p class="order__radio-text">Дизайн флаера</p></div>
              <div class="order__radio-block"><input type="checkbox" class="order__radio"><p class="order__radio-text">Дизайн открытки</p></div>
            </div>
            <div class="order__price">
              <p class="order__one-title">Ваш бюджет (руб):</p>
              <input type="text" class="order__price-block" placeholder="Написать...">
            </div>
          </div>
          <div class="order__two-block">
            <div class="order__comment">
              <p class="order__one-title">Комментарий к заказу:</p>
              <textarea class="order__comment-block" placeholder="Написать..."></textarea>
            </div>
          </div>
        </div>
        <button class="button_main order__buttom">
          Заказать
        </button>
      </div>
    </section>
    <Footer></Footer>
</template>