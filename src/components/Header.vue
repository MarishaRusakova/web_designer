<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
      <div class="control">
        <div class="header_main">
          <div class="header_block">
            <ul class="header__nav-list">
              <li class="header__nav-list-item">
                <RouterLink to="/main" class="header__nav-list-link">
                  Главная
                </RouterLink>
              </li>
              <li class="header__nav-list-item">
                <RouterLink to="/about" class="header__nav-list-link">
                  Обо мне
                </RouterLink>
              </li>
              <li class="header__nav-list-item">
                <RouterLink to="/services" class="header__nav-list-link">
                  Услуги
                </RouterLink>
              </li> 
              <li class="header__nav-list-item">
                <RouterLink to="/order" class="header__nav-list-link">
                  Заказать
                </RouterLink>
              </li>
              <li class="header__nav-list-item">
                <RouterLink to="/account" class="header__nav-list-link">
                  Личный кабинет
                </RouterLink>
              </li>
            </ul> 
            <div class="header__account">
              <output class="header__nav-list-link-account">
                Марина
              </output>
              <button class="button">
                Выйти
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>