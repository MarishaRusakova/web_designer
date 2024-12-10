<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'
</script>

<template>
    <Header></Header>
    <section class="intro">
      <div class="control">
        <div class="intro__title">
          <p class="intro__title-text text-one">СОЗДАЮ</p>
          <p class="intro__title-text text-two">ЭМОЦИОНАЛЬНЫЕ ДИЗАЙНЫ</p>
          <p class="intro__title-text text-three">С ПРОДУМАННОЙ</p>
          <p class="intro__title-text text-four">СТРУКТУРОЙ</p>
        </div>
        <button class="intro-bottom button_main">
          Услуги
        </button>
      </div>
    </section>
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
    <section class="services">
      <div class="control">
        <p class="services__title">УСЛУГИ</p>
        <div class="services__slider">
          <div class="def one">
              <img src="/image/def-one.png" class="services__def-img">
              <p class="services__def-title">Сайт</p>
              <p class="services__def-text">От 10000 руб</p>
              <button class="services__bottom button_main">Заказать</button>
          </div>
          <div class="def two">
            <img src="/image/def-two.png" class="services__def-img">
              <p class="services__def-title">Сообщество</p>
              <p class="services__def-text">От 1500 руб</p>
              <button class="services__bottom button_main">Заказать</button>
          </div>
          <div class="def three">
            <img src="/image/def-three.png" class="services__def-img">
              <p class="services__def-title">Визитка</p>
              <p class="services__def-text">От 1000 руб</p>
              <button class="services__bottom button_main">Заказать</button>
          </div>
          <div class="def four">
            <img src="/image/def-four.png" class="services__def-img">
              <p class="services__def-title">Презентация</p>
              <p class="services__def-text">От 2000 руб</p>
              <button class="services__bottom button_main">Заказать</button>
          </div>
          <div class="def five">
            <img src="/image/def-five.png" class="services__def-img">
              <p class="services__def-title">Флаер</p>
              <p class="services__def-text">От 1200 руб</p>
              <button class="services__bottom button_main">Заказать</button>
          </div>
          <div class="def five">
            <img src="/image/def-six.png" class="services__def-img">
              <p class="services__def-title">Открытка</p>
              <p class="services__def-text">От 1000 руб</p>
              <button class="services__bottom button_main">Заказать</button>
          </div>
        </div>
        <div class="services__slider-button">
          <div class="services__button-left">
            <button class="services__button button_main" id="left">
              <img src="/image/left.png">
            </button>
          </div>
          <div class="services__button-details">
            <div class="circle one"></div>
            <div class="circle two"></div>
            <div class="circle three"></div>
            <div class="circle four"></div>
            <div class="circle five"></div>
          </div>
          <div lass="services__button-right">
            <button class="services__button button-right button_main" id="right">
              <img src="/image/right.png">
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="stages">
      <div class="control">
        <p class="stages__title">ЭТАПЫ РАБОТЫ</p>
        <div class="stages__details">
          <div class="stage stage_one">1</div>
          <img src="/image/stages line.png" class="stages__line">
          <div class="stage stage_two">2</div>
          <img src="/image/stages line.png" class="stages__line">
          <div class="stage stage_three">3</div>
          <img src="/image/stages line.png" class="stages__line">
          <div class="stage stage_four"><img src="/image/stages point.png" class="stages__point"></div>
        </div>
        <div class="stages__text">
          <div class="stages__text-one">
            <p class="stages__text-title">Заказ</p>
            <p class="stages__text-podtext">В этот момент я узнаю, что Вам нужно сделать</p>
          </div>
          <div class="stages__text-two">
            <p class="stages__text-title">Идея</p>
            <p class="stages__text-podtext">Мы определимся</br> со стилем дизайна</p>
          </div>
          <div class="stages__text-three">
            <p class="stages__text-title">Срок</p>
            <p class="stages__text-podtext">Мы договариваемся</br> до какого дня нужно сделать работу</p>
          </div>
        </div>
      </div>
    </section>
    <section class="feedback">
      <div class="control">
        <p class="feedback__title">ОБРАТНАЯ СВЯЗЬ</p>
        <p class="feedback__podtext">Если у Вас появились вопросы, пожалуйста, напишите нам</br> Мы ответим Вам в ближайшее время!</p>
        <div class="feedback__comment">
          <input type="text" class="comment" placeholder="Написать...">
          <button class="button_main">
            Отправить
          </button>
        </div>
      </div>
      <a class="up__btn" href="#top" id="btn__up"><svg class="up" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg"><svg width="256px" height="256px" viewBox="0 0 24 24" fill="currentColor" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><g fill="none" stroke="currentColor" stroke-width="2"><circle class="up" cx="12" cy="12" r="10"/><path class="up" stroke-linecap="round" stroke-linejoin="round" d="m8 13.5l4-4l4 4"/></g></g></svg></svg></a>
    </section>
    <Footer></Footer>
</template>