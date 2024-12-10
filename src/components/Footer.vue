<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer>
      <div class="footer">
        <div class="control">
          <div class="footer__block">
            <div class="footer__nav">
              <ul class="footer__nav-list">
                <li class="footer__nav-list-item">
                  <a href="/index.html" class="footer__nav-list-link">
                    Главная
                  </a>
                </li>
                <li class="footer__nav-list-item">
                  <a href="/pages/about__me.html" class="footer__nav-list-link">
                    Обо мне
                  </a>
                </li>
                <li class="footer__nav-list-item">
                  <a href="/pages/services.html" class="footer__nav-list-link">
                    Услуги
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer__nav">
              <ul class="footer__nav-list">
                <li class="footer__nav-list-item">
                  <a href="/pages/order.html" class="footer__nav-list-link">
                    Заказать
                  </a>
                </li>
                <li class="footer__nav-list-item">
                  <a href="/pages/account.html" class="footer__nav-list-link">
                    Личный кабинет
                  </a>
                </li>
                <li class="footer__nav-list-item">
                  <a href="/pages/politic.html" class="footer__nav-list-link">
                    Политика конфидециальности
                  </a>
                </li>
              </ul> 
            </div>
            <div class="footer__icons">
              <img src="/image/Github.png" class="icon">
              <img src="/image/Behance.png" class="icon">
              <img src="/image/vk.png" class="icon">
              <img src="/image/telegram.png" class="icon">
            </div>
          </div>
          <p class="footer__years">2024 ©️</p>
        </div>
      </div>
    </footer>
</template>