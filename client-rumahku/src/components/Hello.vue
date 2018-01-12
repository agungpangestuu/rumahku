<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >

    <q-toolbar slot="header" inverted color="secondary">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Quasar App
        <div slot="subtitle">Running on Quasar v{{$q.version}}</div>
      </q-toolbar-title>
      <q-btn class="within-iframe-hide" flat @click="open = true" style="margin-right: 15px">
        <q-icon name="account_circle" />
        Login
      </q-btn>
      <div>
        <q-modal v-model="open">
          <q-btn color="primary" @click="open = false" label="Close">Close</q-btn>
        </q-modal>
      </div>
    </q-toolbar>

    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item @click="launch('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click="launch('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
    <q-pull-to-refresh :handler="refresher">

  </q-pull-to-refresh>
  <div class="row">
  <div class="col-4" v-for="q in 10">
  <q-card inline class="bigger">
    <q-card-media>
      <img src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg">
    </q-card-media>
    <q-card-title>
      Cafe Basilico
      <q-rating slot="subtitle" v-model="stars" :max="5" />
      <div slot="right" class="row items-center">
        <q-icon name="place" /> 250 ft
      </div>
    </q-card-title>
    <q-card-main>
      <p>$・Italian, Cafe</p>
      <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
    </q-card-main>
    <q-card-separator />
    <q-card-actions>
      <q-btn flat round small><q-icon name="event" /></q-btn>
      <q-btn flat>5:30PM</q-btn>
      <q-btn flat>7:30PM</q-btn>
      <q-btn flat>9:00PM</q-btn>
      <q-btn flat color="primary">Reserve</q-btn>
    </q-card-actions>
  </q-card>
  </div>
  </div>
  </q-layout>
</template>

<script>
import {
  dom,
  event,
  openURL,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QPullToRefresh,
  QChip,
  Toast,
  QCard,
  QCardTitle,
  QCardMedia,
  QCardActions,
  QCardSeparator,
  QCardMain,
  QModal
} from 'quasar'

const
  { viewport } = dom,
  { position } = event,
  moveForce = 30,
  rotateForce = 40,
  RAD_TO_DEG = 180 / Math.PI

function getRotationFromAccel (accelX, accelY, accelZ) {
  /* Reference: http://stackoverflow.com/questions/3755059/3d-accelerometer-calculate-the-orientation#answer-30195572 */
  const sign = accelZ > 0 ? 1 : -1
  const miu = 0.001

  return {
    roll: Math.atan2(accelY, sign * Math.sqrt(Math.pow(accelZ, 2) + miu * Math.pow(accelX, 2))) * RAD_TO_DEG,
    pitch: -Math.atan2(accelX, Math.sqrt(Math.pow(accelY, 2) + Math.pow(accelZ, 2))) * RAD_TO_DEG
  }
}

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QPullToRefresh,
    QChip,
    Toast,
    QCard,
    QCardTitle,
    QCardMedia,
    QCardActions,
    QCardSeparator,
    QCardMain,
    QModal
  },
  data () {
    return {
      items: [{}, {}, {}, {}, {}, {}],
      open: false
    }
  },
  computed: {

  },
  methods: {
    launch (url) {
      openURL(url)
    },
    refresher (done) {
      setTimeout(() => {
        done()
        this.items.push({})
        Toast.create('Item #' + this.items.length + ' is new.')
      }, 1000)
    }
  },

}
</script>

<style lang="stylus">
.logo-container
  width 255px
  height 242px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
.q-toolbar-inverted
  background: #ffffff;
</style>
