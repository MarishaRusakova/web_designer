<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'
</script>

<template>
    <Header></Header>
    <section class="account">
      <div class="control">
        <p class="account-title">ЛИЧНЫЙ КАБИНЕТ</p>
        <div class="account__name-block account__block">
          <p class="account-name account-podtitle">Имя:</p>
          <div type="output" class="output__name output">Марина</div>
        </div>
        <div class="account__floor-block account__block">
          <p class="account-floor account-podtitle">Пол:</p>
          <div type="output" class="output__floor output">Женский</div>
        </div>
        <div class="account__date-block account__block">
          <p class="account-date account-podtitle">Дата рождения:</p>
          <div type="output" class="output__date output">20.01.2006</div>
        </div>
        <div class="account__number-block account__block">
          <p class="account-number account-podtitle">Номер телефона:</p>
          <div type="output" class="output__number output">+7(996)670-48-22</div>
        </div>
      </div>
      <button class="button_main account__buttom">
        Выйти
      </button>
    </section>
    <Footer></Footer>
</template>