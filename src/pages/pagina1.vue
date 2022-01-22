<template>
    <main>
        <h1>Etapa 1</h1>
        <p>Você acordou na floresta tonto e com uma grande dor de cabeça, sem nenhuma
memória de como foi parar ali. Um barulho cada vez mais intenso foi o que
despertou você desse apagão. Após abrir os olhos e levantar-se, você observa uma
manada de búfalos vindo em sua direção, a pouquíssimos metros de distância. O
que você faz?</p>
        <a href="/pagina1lose"> Opção A (Corre o mais rápido possível)</a>
        <a href="/pagina1win"> Opção B (Sobe na árvore)</a>
        <a href="/pagina1losecopy"> Opção C (Se finge de morto)</a>

    </main>

</template>

<script>
export default {
    name:'pagina1'
        
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