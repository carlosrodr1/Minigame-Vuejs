<template>
  <div id="app">
    <b-breadcrumb class="breadcrumb">
    <b-breadcrumb-item href="/">
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      Home
    </b-breadcrumb-item>
    <b-breadcrumb-item href="/pagina1">Etapa 1</b-breadcrumb-item>
    <b-breadcrumb-item href="/pagina2">Etapa 2</b-breadcrumb-item>
    <b-breadcrumb-item href="/pagina3">Etapa 3</b-breadcrumb-item>
  </b-breadcrumb>
    <Header />
    <router-view path="$router.key" />
    <Footer />

  </div>

  

</template>

<script>
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
    }
</script>