<template>
    <main>
        <h1>Etapa 2</h1>
        <p>Ao ver que a manada passou, você desce da árvore e começa a explorar a região
em busca de respostas. Não muito distante dali, você encontra um acampamento
abandonado e um bilhete com instruções, deixado para trás. Antes que você possa
alcançar o bilhete, um homem aparece com uma marreta gritando e avançando em
sua direção. No seu corpo a adrenalina dispara. O que você faz?</p>

        <a href="/pagina2lose"> Opção A (Foge para bem longe)</a>
        <a href="/pagina2losecopy"> Opção B (Pega o bilhete e foge para bem longe)</a>
        <a href="/pagina2win"> Opção C (Puxa toda coragem do coração e enfrenta o homem)</a>


    </main>

</template>

<script>
export default {
    name:'pagina2'
        
    }

</script>

<style scoped>
main{
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
    font-size: 35px;
}
h1{
    color: #292929;
    font-size: 50px;
    margin-bottom: 22px;
}
a{
    font-size: 22px;
    color: #292929;
    text-decoration: none;
    
}
p{
    width: 75%;
    color: #292929;
}


</style>